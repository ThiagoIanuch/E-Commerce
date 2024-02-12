function Menu() {
  return (
    <>
      <header class="menu-container">
        <div class="menu-top">
            <div id="logo"> 
                E-Commerce
            </div>

            <div class="menu-login">
                <a href="">Entrar </a>
                <a href="">Registrar</a>
            </div>
        </div>

        <nav>
            <ul class="menu-bottom">
                <li class="menu-link"><a href="">Todos</a></li>
                <li class="menu-link"><a href="">Mais vendidos</a></li>
                <li class="menu-link"><a href="">Eletônicos</a></li>
                <li class="menu-link"><a href="">Computadores</a></li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Menu