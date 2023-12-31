import { Navbar, Contact, Footer } from '../components'
import Router from '../routes/Routers'
const Layout = () => {
  return (
    <>
      <Navbar/>
        <main>
          <Router/>
        </main>
      <Contact/>
      <Footer/>
    </>
  )
}

export default Layout
