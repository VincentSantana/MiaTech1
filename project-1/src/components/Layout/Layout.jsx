import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"


const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="page-render-box">
      <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
