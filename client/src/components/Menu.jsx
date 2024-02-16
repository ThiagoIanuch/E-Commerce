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
              <li className="menu-link"><a href="/all">Todos</a></li>
              <li className="menu-link"><a href="/all">Mais vendidos</a></li>
              <li className="menu-link"><a href="/all">Eletrônicos</a></li>
              <li className="menu-link"><a href="/all">Informática</a></li>
              <li className="menu-link"><a href="/all">TVs e Vídeo</a></li>
              <li className="menu-link"><a href="/all">Smarthphones</a></li>
          </ul>
      </nav>
    </header>
  )
}

export default Menu