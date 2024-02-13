import { useEffect } from 'react'
import Menu from './components/Menu.jsx'
import Footer from './components/Footer.jsx'
import Showcase from './components/Showcase.jsx'

function Index() {
  useEffect(() => {
    document.title = "E-Commerce - Home";
  }, []);

  return (
    <>
        <Menu></Menu>
        <Showcase></Showcase>
        <Footer></Footer>
    </>
  )
}

export default Index