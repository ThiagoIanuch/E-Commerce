import { useEffect } from "react"
import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx"
import Error404 from "../public/error-404.png"

function NotFound() {
    useEffect(() => {
        document.title = "E-Commerce - Página não encontrada"
    }, []);

    return (
        <>
            <Menu></Menu>
            <div className="content not-found">
                <a href="/">
                    <img src={Error404}></img>
                </a>
            </div>
            <Footer></Footer>
        </>
    )
}

export default NotFound