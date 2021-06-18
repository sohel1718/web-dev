import Header from "../Header/header"
import Footer from "../Footer/footer"

export default function Layout(props) {
  return (
    <div className="main">
      <Header />     
        {props.children}
      <Footer />      
    </div>
  )
}
