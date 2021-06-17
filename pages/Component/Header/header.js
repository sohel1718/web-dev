import React from 'react'
import Style from  './style.module.scss' 
import Image from 'next/image'
import logo from '../../../public/images/dev-black.png'

const Header = () => {
    return (
        <div className={Style.headerContainer}>
            <div className={Style.wrapper}>
                <div className={Style.left}>
                    <div className={Style.logo}>
                        <Image
                            src={logo} 
                            alt="Picture of the author"
                            width={50}
                            height={45}
                        />
                    </div>
                    <div className={Style.search}>
                       <input type="text" name="search" placeholder="Search..." /> 
                    </div>
                </div>
                <div className={Style.right}>
                    <div className={Style.signs}>
                        <button className={Style.secBtn} >Log in</button>
                        <button>Create account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header