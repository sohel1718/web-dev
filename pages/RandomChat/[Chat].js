import React,{useState, useEffect} from "react"
import { useRouter } from 'next/router'
import Layout from '../Component/Layout/layout'
import DevDetail from "../Component/DevDetail/devDetail"
import ChatBox from "../Component/ChatBox/chatBox"
import Style from './chat.module.scss'
import { db } from "../firebase"
import { useCollection } from "react-firebase-hooks/firestore"

const RandomChat = () => {
  const [User, setUsers] = useState();
  const router = useRouter();
  const { Chat } = router.query

    useEffect(() => {
        db.collection('users')
        .get()
        .then(querySnapshot => {
        const user = querySnapshot.docs.map(doc => doc.data())
        const getUser = user.filter(data => data.email === Chat)[0];
        setUsers(getUser)
        })
    }, [Chat]);
    
  
    return (
        <Layout>
             <div className={Style.chatContainer} >
                
                <div className={Style.wrapper}>
                    <div className={Style.devDetail}>
                        <DevDetail User={User} />
                    </div>
                    <div className={Style.chatWrapper}>
                        <ChatBox Chat={Chat} />
                    </div>
                </div>
             </div>
        </Layout>
    )
}

export default RandomChat