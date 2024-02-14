import { useState, useEffect } from 'react'
import Axios from "axios"
import Menu from '../components/Menu.jsx'
import Footer from '../components/Footer.jsx'

function Index() {
  const [showcase, setShowcase] = useState([]);

  useEffect(() => {
    document.title = "E-Commerce - Home";

    Axios.get("http://localhost:8080/get-products").then((response) => {
      setShowcase(response.data)
    })
  }, []);

  return (
    <>
        <Menu></Menu>

        <div className="showcase-container">
          <div className="showcase-grid">
              {showcase.map((product, index) => (                              
                <a href="">
                  <div className="product" key={index}>
                      <div className="product-avatar">
                          <img src={"http://localhost:8080/products/" + product.productAvatar}></img>
                      </div>

                      <div className="product-name">{product.productName}</div>

                      <div className="product-price">R$ {product.productPrice}</div>
                    </div>
                </a>
              ))}
          </div>
        </div>

        <Footer></Footer>
    </>
  )
}

export default Index