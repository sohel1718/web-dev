import React,{ useState, useEffect } from "react"
import Style from "./chat.module.scss"
import Image from 'next/image'
import { useAuthState } from "react-firebase-hooks/auth"
import send from "../../../public/images/send.png"
import { db, auth } from "../../firebase"
import { formatRelative } from "date-fns";
import firebase from "firebase"

const ChatBox = () => {
    const [message, setMessage] = useState("");
    const [chat, setChats] = useState();
    const [user] = useAuthState(auth);

    useEffect(() => {
        db.collection("messages")
          .orderBy("createdAt")
          .limit(100)
          .onSnapshot((querySnapShot) => {
            const data = querySnapShot.docs.map((doc) => ({
              ...doc.data(),
              id: doc.id,
            }));
    
            setChats(data);
          });
      }, [db]);

      const sendMessage = () => {
        db.collection("messages").add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            message: message,
            uid: user.email,
            photoUrl: user.photoURL
        })
        setMessage("");
    }

      const myLoader=(src)=>{
        return `${src}`;
    }


    return (
        <div className={Style.chatBoxContainer}>
            <div className={Style.wrapper}>
                <div className={Style.chatPanel}>
                    {
                        chat?.map(message => {
                            if (message.uid === user.email) {
                                return (
                                    <div className={Style.messagePrimary}>
                                        {message.createdAt?.seconds ? (
                                            <span>
                                                {formatRelative(
                                                    new Date(message.createdAt.seconds * 1000),
                                                    new Date()
                                                )}
                                            </span> ) : null
                                        }
                                        <div key="" className={Style.primaryUser}> 
                                            <span>{message.message}</span>
                                            <Image loader={() => myLoader(message.photoUrl)} src={message.photoUrl} alt="" height="40px" width="40px" />  
                                        </div>
                                    </div>
                                )
                            } else {
                               return (
                                    <div className={Style.messageSecondary}>
                                         {message.createdAt?.seconds ? (
                                            <span>
                                                {formatRelative(
                                                    new Date(message.createdAt.seconds * 1000),
                                                    new Date()
                                                )}
                                            </span> ) : null
                                        }
                                        <div className={Style.secondaryUser}>
                                            <Image loader={() => myLoader(message.photoUrl)} src={message.photoUrl} alt="" height="50px" width="50px" />
                                            <span>{message.message}</span>
                                        </div>
                                    </div>
                               )
                            }
                        })
                    }
                </div>
                <div className={Style.sendBox}>
                    <textarea onChange={(e) => {setMessage(e.target.value)}} value={message} placeholder="Type your message here" />
                    <button onClick={() => {sendMessage()}}><Image src={send} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default ChatBox