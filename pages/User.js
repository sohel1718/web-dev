import React,{useEffect, useState} from "react"
import Layout from "./Component/Layout/layout"
import Styles from "./users.module.scss"
import Link from 'next/link';
import { db } from "./firebase"
import chat from "../public/images/chat.png"
import Image from 'next/image'

const User = () => {
    const [Users, setUsers] = useState();
    useEffect(() => {
        db.collection('users')
        .get()
        .then(querySnapshot => {
        const user = querySnapshot.docs.map(doc => doc.data())
        setUsers(user)
        })
    }, []);

    const myLoader=(src)=>{
        return `${src}`;
    }
    return (
        <Layout>
            <div className={Styles.container}>
                <div className={Styles.wrapper}>
                    {
                        Users && Users.map(data => {
                            return (
                                <div key={data.email} className={Styles.user}>
                                    <div className={Styles.wrap}>
                                        <div className={Styles.userImage}>
                                            <Image loader={() => myLoader(data.photoURL)} src={data.photoURL} alt="" height="50px" width="50px" /> 
                                        </div>
                                        <span>{data.email}</span>
                                    </div>
                                    <Link href={`/RandomChat/${data.email}`}>
                                        <a>
                                        <div className={Styles.chatImage}>
                                            <Image src={chat} alt="" />
                                        </div>
                                        </a>
                                    </Link>
                                </div>
                            )
                        }) 
                    }
                </div>
            </div>
        </Layout>
    )
}

export default User