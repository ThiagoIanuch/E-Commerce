import { useEffect, useState } from 'react'
import axios from "axios"

function Showcase() {
    const [showcase, setShowcase] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/get-showcase").then((response) => {
            setShowcase(response.data)
        })
    }, []);

    return (
        <div className="showcase-container">
            <div className="showcase-grid">
                {showcase.map((product, index) => (
                    <a href="">
                        <div className="product" key={index}>
                            <div className="product-avatar">
                                <img src={"http://localhost:8080/products-avatar/" + product.productAvatar}></img>
                            </div>

                            <div className="product-name">{product.productName}</div>

                            <div className="product-price">R$ {product.productPrice}</div>
                         </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Showcase