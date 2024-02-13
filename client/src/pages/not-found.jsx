import { useEffect } from "react"
import Menu from "./components/Menu.jsx";
import Footer from "./components/Footer.jsx"

function NotFound() {
    useEffect(() => {
        document.title = "E-Commerce - Página não encontrada"
    }, []);

    return (
        <>
            <Menu></Menu>
            <div className="not-found-container">
                <a href="/">ERRO 404</a>
            </div>
            <Footer></Footer>
        </>
    )
}

export default NotFound