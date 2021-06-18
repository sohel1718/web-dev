import Layout from "./Component/Layout/layout"
import Image from 'next/image'
import logo from '../public/images/dev-black.png'
import Style from "./login.module.scss"
import { auth, provider } from "./firebase"

const Login = () => {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <Layout>
            <div className={Style.loginConatiner}>
                <div className={Style.wrapper}>
                    <div className={Style.image}>
                        <Image src={logo} alt="" />
                    </div>
                    <span>Login With Your Account</span>
                    <button onClick={() => signIn()}>Login with google</button>
                </div>
            </div>
        </Layout>
    )
}

export default Login