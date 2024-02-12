import { useState } from "react"
import axios from "axios"

function RegisterForm() {

    const[data, setData] = useState({
        username: ''
    })

    const inputData = function(e) {
        setData({...data, [e.target.name]: e.target.value});
    }

    const sendData = function(e) {
        e.preventDefault();
        axios.post("http://localhost:8080/register", data);
    }

    return (
        <>
            <div class="content">
                <br></br>

                <form onSubmit={sendData}>
                    <label>Nome de usuário</label><br></br>

                    <input type="text" name="username" placeholder="Digite o nome de usuário" onChange={inputData}></input>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}

export default RegisterForm