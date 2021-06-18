import React from "react"
import Style from "./dev.module.scss";
import Image from 'next/image'
import user from '../../../public/images/u1.jpg'
import wave from '../../../public/images/wave.png'

const DevDetail = ({ User }) => {
    const myLoader=(src)=>{
        return `${src}`;
    }
    return (
        <div className={Style.devContainer}>
            <div className={Style.wrapper}>
                <div className={Style.user}>
                    <div className={Style.userImage}>
                            {User &&
                                <Image loader={() => myLoader(User.photoURL)} src={User.photoURL} alt="" height="50px" width="50px" /> 
                            }
                        <div className={Style.waveImage}>
                            <Image src={wave} alt="" />
                        </div>
                    </div>
                    <span>{User && User.email}</span>
                </div>
                <div className={Style.tagline}>
                   MERN stack developer
                </div>
                <div className={Style.skills}>
                    <div className={Style.skill}>
                        React
                    </div>
                    <div className={Style.skill}>
                        Gatsby
                    </div>
                    <div className={Style.skill}>
                        Next.js
                    </div>
                    <div className={Style.skill}>
                        Javascript
                    </div>
                    <div className={Style.skill}>
                        Php
                    </div>
                    <div className={Style.skill}>
                        Asp.net
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DevDetail