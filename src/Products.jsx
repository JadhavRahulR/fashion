import React, { useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import dataInfo from "./dataInfo";
import "./Products.css";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedId = searchParams.get("id");

  useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [selectedId]);

  const { mainProduct, otherProducts } = useMemo(() => {
    if (!selectedId) {
      return {
        mainProduct: null,
        otherProducts: dataInfo,
      };
    }

    const main = dataInfo.find(
      (item) => String(item.id) === String(selectedId)
    );

    const others = dataInfo.filter(
      (item) => String(item.id) !== String(selectedId)
    );

    return {
      mainProduct: main,
      otherProducts: others,
    };
  }, [selectedId]);

  

  return (
    <>

    <div className="hero-section">

      <h1>Find Your Next Favourite Dress & Fashion Inspiration</h1>

<p>
  Explore a curated collection of stylish dresses, fashionable outfits, and
  trending looks at <strong>WearIsty</strong>. From casual everyday wear to
  elegant evening dresses and seasonal fashion, discover outfit ideas for every
  occasion. Browse inspiring styles, compare looks, and shop your favourite
  fashion pieces through trusted retailers. WearIsty makes finding your perfect
  outfit simple, stylish, and enjoyable.
</p>

    </div>
    <div className="main-products-wrapper">

      {/* Selected Product */}
      {mainProduct && (
        <div className="highlighted-product-section">
          <h2>Your Selection</h2>

          <div className="product-card highlighted-card">
            <img src={mainProduct.image} alt={mainProduct.title} />

            <div className="product-content">
              <h3>{mainProduct.title}</h3>
              <p>{mainProduct.description}</p>

              <button>
                <a
                  href={mainProduct.productLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                  BUY NOW
                </a>
              </button>

              <button
                onClick={() => setSearchParams({})}
                style={{
                  backgroundColor: "#ccc",
                  marginLeft: "10px",
                  color: "#000",
                }}
                >
                Clear Selection
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Other Products */}
      <div className="other-products-section">

        {mainProduct && <h2>Explore More Dresses</h2>}

        <div className="products-container general-grid">

          {otherProducts.map((item) => (
            <div className="product-card normal-card" key={item.id}>

              <img src={item.image} alt={item.title} />

              <div className="product-content">

                <h3>{item.title}</h3>

                <p>{item.description}</p>

               <div className="button-group">
    <button
        onClick={() => setSearchParams({ id: item.id })}
        style={{
          backgroundColor: "#fafafa",
          color: "#000",
          border: "1px solid #ccc"
        }}
        >
        View Details
    </button>

    <button>
        <a
            href={item.productLink}
            target="_blank"
            rel="noopener noreferrer"
            >
            BUY NOW
        </a>
    </button>
</div>
              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
          </>
  );
};

export default Products;