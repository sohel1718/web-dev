import React from 'react'
import style from  './style.module.scss' 
import Image from 'next/image'
import insta from '../../../public/images/instagram.png'
import linkedin from '../../../public/images/linkedin.png'

const Footer = () => {
    return (
        <div className={style.footerContainer}>
            <div className={style.wrapper}>
                <div className={style.left}>
                    DEV Community – A constructive and inclusive social network for software developers. With you every step of your
                </div>
            </div>
        </div>
    )
}

export default Footer