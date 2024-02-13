function Menu() {
  return (
    <header className="menu-container">
      <div className="menu-top">
          <div id="menu-logo"> 
              <a href="/">E-Commerce</a>
          </div>

          <div className="menu-login">
              <a href="/login">Entrar</a>
              <a href="/register">Registrar</a>
          </div>
      </div>

      <nav>
          <ul className="menu-bottom">
              <li className="menu-link"><a href="">Todos</a></li>
              <li className="menu-link"><a href="">Mais vendidos</a></li>
              <li className="menu-link"><a href="">Eletrônicos</a></li>
              <li className="menu-link"><a href="">Informática</a></li>
              <li className="menu-link"><a href="">TVs e Vídeo</a></li>
              <li className="menu-link"><a href="">Smarthphones</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Menu