import { useEffect } from "react"
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function NotFound() {
    useEffect(() => {
        document.title = "Página não encontrada"
    }, []);

    return (
        <>
            <Menu></Menu>
            <div>
                <h1>Página não encontrada</h1>
                <br></br>
                <a href="/">Retornar a página principal</a>
            </div>
            <Footer></Footer>
        </>
    )
}

export default NotFound