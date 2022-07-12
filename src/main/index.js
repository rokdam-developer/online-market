import React from "react";
import "./reset.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import axios from "axios";

function MainPageComponenet() {
  const [products, setProducts] = React.useState([]);
  React.useEffect(function () {
    axios
      .get(
        "https://7a9b4d2a-cd80-4a35-821a-c63e702f9f69.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러발생 : ", error);
      });
  }, []);

  return (
    <div>
      <header className="header">
        <div className="header-area">
          <a href="/public/index.html">
            <img src="/images/logo.png" alt="로고 이미지" />
          </a>
        </div>
      </header>
      <main className="main">
        <div className="banner">
          <img src="/images/banner.png" alt="배너 이미지" />
        </div>
        <h1>판매되는 상품들</h1>
        <div className="product-list">
          {products.map(function (product, index) {
            return (
              <div className="product-card">
                <div className="product-img-container">
                  <img
                    className="product-img"
                    src={product.imageUrl}
                    alt="책 이미지"
                  />
                </div>
                <div className="product-texts">
                  <span className="product-title">{product.title}</span>
                  <div className="product-author-content">
                    <FontAwesomeIcon icon={faPencil} className="pencil" />
                    <span className="product-author">{product.author}</span>
                  </div>
                  <span className="product-price">{product.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default MainPageComponenet;
