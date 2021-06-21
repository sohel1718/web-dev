import React from 'react'
import Style from  './style.module.scss' 
import { useAuthState } from "react-firebase-hooks/auth"
import Link from 'next/dist/client/link'
import { auth, db } from "../../firebase"
import Image from 'next/image'
import logo from '../../../public/images/dev-black.png'

const Header = () => {
    const [user, loading] = useAuthState(auth);
    const myLoader=({src})=>{
        return `${user.photoURL}`;
    }

    return (
        <div className={Style.headerContainer}>
             <div className={Style.line}></div>
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
                { user === null || user.emailVerified === false ?
                    ( 
                        <div className={Style.right}>
                    <div className={Style.signs}>
                        <Link href="/">
                            <a>
                                <button className={Style.secBtn} >Log in</button>
                            </a>
                        </Link>
                    </div>
                </div>
                    ) : (
                        <div className={Style.loggedIn}>
                            <div className={Style.userImage}>
                                <Image loader={myLoader} src={user.photoURL} alt="" height="20px" width="20px" /> 
                            </div>
                            <span>Welcome, {user.providerData[0].displayName}</span>
                            <Link href="/Blogs">
                                <a>
                                    <button className={Style.secBtn}>Blogs</button>
                                </a>
                            </Link>
                            <Link href="/">
                                <a><button onClick={() => auth.signOut() }>SignOut</button></a>
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header