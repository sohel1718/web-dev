import React from "react"
import Layout from '../Component/Layout/layout'
import DevDetail from "../Component/DevDetail/devDetail"
import ChatBox from "../Component/ChatBox/chatBox"
import Style from './chat.module.scss'

const RandomChat = () => {    

    return (
        <Layout>
             <div className={Style.chatContainer} >
                
                <div className={Style.wrapper}>
                    <div className={Style.devDetail}>
                        <DevDetail />
                    </div>
                    <div className={Style.chatWrapper}>
                        <ChatBox />
                    </div>
                </div>
             </div>
        </Layout>
    )
}

export default RandomChat