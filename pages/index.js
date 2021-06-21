import Layout from "./Component/Layout/layout";
import Style from  './user.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import rocket from '../public/images/rocket_3.gif';
import u1 from '../public/images/u1.jpg';
import u2 from '../public/images/u2.jpg'; 
import u3 from '../public/images/u3.jpg';
import u4 from '../public/images/u4.jpg'; 
import u5 from '../public/images/u5.jpg'; 
import u6 from '../public/images/u6.jpg'; 
import u7 from '../public/images/u7.jpg'; 


export default function Home() {
  return (
    <div className="main">
      <Layout>
        <div className={Style.userContainer}>
          <div className={Style.wrapper}>
            <div className={Style.userCount}>
              <Image src={rocket} alt="" />
              <span>{"<TotalDevelopers props={20} />"}</span>
              <Link href="/RandomChat/Chat">
                <a><button>{"Start Chating"}</button></a>
              </Link>
            </div>
            <div className={Style.users}>
              <div className={Style.user}>
                <Image src={u1} alt="" />
              </div>
              <div className={Style.user}>
                <Image src={u2} alt="" />
              </div>
              <div className={Style.user}>
                <Image src={u3} alt="" />
              </div>
              <div className={Style.user}>
                <Image src={u4} alt="" />
              </div>
              <div className={Style.user}>
                <Image src={u5} alt="" />
              </div>
              <div className={Style.user}>
                <Image src={u6} alt="" />
              </div>
              <div className={Style.user}>
                <Image src={u7} alt="" />
              </div>
            </div>
          </div> 
        </div>
      </Layout>    
    </div>
  )
}
