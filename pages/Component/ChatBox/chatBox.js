import React,{ useState } from "react"
import Style from "./chat.module.scss"
import Image from 'next/image'
import { useAuthState } from "react-firebase-hooks/auth"
import send from "../../../public/images/send.png"
import { db, auth } from "../../firebase"
import { useCollection } from "react-firebase-hooks/firestore"

const ChatBox = ({ Chat }) => {
    const [message, setMessage] = useState("");
    const [user, loading] = useAuthState(auth);
    const [messageSnap] = useCollection(
        db.collection("messages").orderBy("timestamp", "asc")
    )
    

    const sendMessage = () => {
        db.collection("chats").doc().add({
            timestamp: Date.now(),
            message: message,
            Receiver: Chat,
            sender: user.email,
            photoUrl: user.photoURL
        })
        setMessage("");
    }

    return (
        <div className={Style.chatBoxContainer}>
            <div className={Style.wrapper}>
                <div className={Style.chatPanel}>
                    {
                        messageSnap?.docs.map(message => {
                            return (
                                <div key="" className={Style.primaryUser}>
                                    <span>{message.data().message}</span>
                                </div>
                            )
                        })
                    }
                    <div className={Style.secondaryUser}>
                        <span>Hello</span>
                    </div>
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