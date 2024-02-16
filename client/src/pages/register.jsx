import Menu from "../components/Menu.jsx"
import Footer from "../components/Footer.jsx"
import { useState } from "react"

function Register() {
    const [data, setData] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    })

    return(
        <>
            <Menu></Menu>
                <div className="form-container">
                    <form className="form-inputs">
                        <label>Seu nome</label>
                        <input type="text" placeholder="Seu nome e sobrenome"></input>

                        <label>E-mail</label>
                        <input type="email" placeholder="Seu e-mail"></input>

                        <label>Senha</label>
                        <input type="password" placeholder="Sua senha"></input>

                        <label>Repita sua senha</label>
                        <input type="password" placeholder="Repita sua senha"></input>

                       
                        <input type="submit" value="Registrar" className="input-submit"></input>
                    </form>
                </div>
            <Footer></Footer>
        </>
    )
}

export default Register