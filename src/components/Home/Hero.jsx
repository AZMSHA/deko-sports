import PropTypes from "prop-types";
import "./Hero.css";

function Hero({ images }) {
  return (
    <section id="hero">
      <div className="hero-images">
        {images.map(({ link, className }) => {
          return (
            <img
              className={className}
              src={link}
              key={className}
              alt="Cyclist using our sportswear"
            />
          );
        })}
      </div>
      <div className="textcontent">
        <h1 className="heading-1">collection</h1>
        <h1 className="heading-2">cycling wear</h1>
        <button className="call-to-action" type="button">
          shop now
        </button>
      </div>
    </section>
  );
}

Hero.propTypes = {
  images: PropTypes.array,
};

export default Hero;
