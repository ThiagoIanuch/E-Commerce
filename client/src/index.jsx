import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu.jsx'
import Footer from './Footer.jsx'
import RegisterForm from './RegisterForm.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu></Menu>
    <RegisterForm></RegisterForm>
    <Footer></Footer>
  </React.StrictMode>,
)
