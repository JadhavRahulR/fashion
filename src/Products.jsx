import React, { useMemo } from 'react';
import dataInfo from "./dataInfo";
import "./Products.css";

const Products = () => {
  // 1. URL se selected ID read karein
  const queryParams = new URLSearchParams(window.location.search);
  const selectedId = queryParams.get("id");

  // 2. dataInfo se data fetch karein or compare krein 
  // UseMemo ka use karke hum products ko category mein divide karenge
  const { mainProduct, otherProducts } = useMemo(() => {
    if (!selectedId) {
      return { mainProduct: null, otherProducts: dataInfo }; // Agar ID nahi hai to saare 'other' hain
    }

    const main = dataInfo.find((item) => String(item.id) === selectedId);
    const others = dataInfo.filter((item) => String(item.id) !== selectedId);

    return { mainProduct: main, otherProducts: others };
  }, [selectedId]); // Jab bhi selectedId badlegi, ye fir se calculate hoga

  return (
    <div className="main-products-wrapper">
      {/* SECTION A: Agar Pinterest se ID aayi hai to main dress highlight karo */}
      {mainProduct && (
        <div className="highlighted-product-section">
          <h2>Your Selection</h2>
          <div className="product-card highlighted-card" key={mainProduct.id}>
            <img src={mainProduct.image} alt={mainProduct.title} />
            <div className="product-content">
              <h3>{mainProduct.title}</h3>
              <p>{mainProduct.description}</p>
              <button><a href={mainProduct.productLink}>BUY NOW</a></button>
              <button
                onClick={() => window.location.href = window.location.pathname}
                style={{ backgroundColor: '#ccc', marginLeft: '10px', color: '#000' }}
              >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SECTION B: Baki saari dresses ko general list mein show karo */}
      <div className="other-products-section">
        {mainProduct && <h2>Explore More Dresses</h2>}
        <div className="products-container general-grid">
          {otherProducts.map((item) => (
            <div className="product-card normal-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="product-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                {/* Agar list se kisi par click karein to wahi main ban jaye */}
                <button
                    onClick={() => window.location.href = `?id=${item.id}`}
                    style={{backgroundColor: '#fafafa', color: '#000', border: '1px solid #ccc'}}
                >
                    View Details
                </button>
                <button><a href={item.productLink}>BUY NOW</a></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;