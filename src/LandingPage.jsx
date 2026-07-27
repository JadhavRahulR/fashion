import { Link } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">

      <section className="hero">

        <div className="hero-left">

          <span className="tag">
            ✨ New Fashion Collection
          </span>

          <h1>
            Discover Your Perfect Style with Wearisty
          </h1>

          <p>
            Browse beautiful dresses, trendy outfits, seasonal collections,
            and fashion inspiration carefully selected for every occasion.
            Find your favourite look and shop it through trusted fashion
            stores.
          </p>

          <div className="hero-buttons">

            <Link to="/collections" className="primary-btn">Start Exploring</Link>

            <a href="#categories" className="secondary-btn">
              Browse Categories
            </a>

          </div>

        </div>

        <div className="hero-right">

          <img
            src="/images/16.jpg"
            alt="Fashion Model"
          />

        </div>

      </section>

      <section className="features">

        <div className="feature-card">
          👗
          <h3>Latest Fashion</h3>
          <p>Discover trending dresses every day.</p>
        </div>

        <div className="feature-card">
          ⭐
          <h3>Curated Collection</h3>
          <p>Only stylish and quality outfit ideas.</p>
        </div>

        <div className="feature-card">
          🛍️
          <h3>Easy Shopping</h3>
          <p>Shop directly from trusted retailers.</p>
        </div>

      </section>

      <section
        className="categories"
        id="categories"
      >

        <h2>Popular Categories</h2>

        <div className="category-grid">

          <div className="category">Casual Dresses</div>

          <div className="category">Party Wear</div>

          <div className="category">Summer Fashion</div>

          <div className="category">Wedding Dresses</div>

          <div className="category">Evening Gowns</div>

          <div className="category">Street Style</div>

        </div>

      </section>

      <section className="cta">

        <h2>Ready to Upgrade Your Wardrobe?</h2>

        <p>
          Discover hundreds of stylish outfits and find
          your next favourite fashion piece.
        </p>

 <Link to="/collections" className="primary-btn">Start Exploring</Link>
       

      </section>

    </div>
  );
};

export default LandingPage;