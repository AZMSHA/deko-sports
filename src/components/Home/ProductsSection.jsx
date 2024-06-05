import PropTypes from "prop-types";
import "./ProductsSection.css";
import Product from "./Product";

function ProductsSection({ products, title, subheading }) {
  return (
    <section className="products-section">
      <header className="products-section-title">
        <h2 className="section-title">{title}</h2>
        <p className="section-subheading">{subheading}</p>
      </header>
      <div className="products">
        {products.map((product) => {
          return <Product key={product.img + product.title} {...product} />;
        })}
      </div>
    </section>
  );
}

ProductsSection.propTypes = {};

export default ProductsSection;
