import PropTypes from "prop-types";
import "./ProductsSection.css";
import Product from "./Product";
import Carousel from "../Carousel/Carousel";

function ProductsSection({ products, title, subheading }) {
  return (
    <section className="products-section">
      <header className="products-section-title">
        <h2 className="section-title">{title}</h2>
        <p className="section-subheading">{subheading}</p>
      </header>
      <div className="products">
        <Carousel
          settings={{
            infinite: true,
            className: "product-section-slider",
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
                breakpoint: 1120,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  arrows: true,
                },
              },
              {
                breakpoint: 900,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  arrows: false,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                },
              },

              {
                breakpoint: 0,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: false,
                },
              },
            ],
          }}
        >
          {products.map((product) => {
            return <Product key={product.img + product.title} {...product} />;
          })}
          {products.map((product) => {
            return <Product key={product.img + product.title} {...product} />;
          })}
          {products.map((product) => {
            return <Product key={product.img + product.title} {...product} />;
          })}
        </Carousel>
      </div>
    </section>
  );
}

ProductsSection.propTypes = {
  products: PropTypes.array,
  title: PropTypes.string,
  subheading: PropTypes.string,
};

export default ProductsSection;
