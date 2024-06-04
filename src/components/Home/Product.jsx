import PropTypes from "prop-types";
import "./Product.css";

function Product({ recent, img, title, rating, price }) {
  function ratingCreate(ratingNumber) {
    let index = ratingNumber;
    let loop = 5;
    const stars = [];

    while (loop) {
      if (index) {
        stars.push(<i className="fa-solid fa-star"></i>);
      } else {
        stars.push(<i className="fa-regular fa-star"></i>);
      }
      index--;
      loop--;
    }

    return stars;
  }
  return (
    <article className="product">
      {recent ? <span>new</span> : null}
      <img src={img} alt={title} />
      <a href="/#">
        <h3>{title}</h3>
      </a>
      <div className="rating">{ratingCreate(rating)}</div>
      <span className="price">{`$${price.toFixed(2)}`}</span>
    </article>
  );
}

Product.propTypes = {};

export default Product;
