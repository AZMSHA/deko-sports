import Hero from "../components/Home/Hero";
import ProductsSection from "../components/Home/ProductsSection";
import PropTypes from "prop-types";
import "./Home.css";
import { useState, useEffect } from "react";
import Banners from "../components/Home/Banners";

function Home(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts([
      {
        recent: true,
        img: "/src/assets/product-images/product-img1.png",
        title: "cycling gloves",
        rating: 5,
        price: 100,
      },
      {
        recent: true,
        img: "/src/assets/product-images/product-img2.png",
        title: "cycling shoes",
        rating: 5,
        price: 100,
      },
      {
        recent: true,
        img: "/src/assets/product-images/product-img3.png",
        title: "cycling gloves",
        rating: 5,
        price: 100,
      },
      {
        recent: true,
        img: "/src/assets/product-images/product-img4.png",
        title: "cycling shoes",
        rating: 5,
        price: 100,
      },
    ]);
  }, []);
  return (
    <main id="home">
      <Hero
        images={[
          { link: "/src/assets/heroimg1.png", className: "hero-img-1" },
          { link: "/src/assets/heroimg2.png", className: "hero-img-2" },
          { link: "/src/assets/heroimg3.png", className: "hero-img-3" },
        ]}
      />
      <ProductsSection
        title={"new arrivals"}
        subheading={"new products of our store"}
        products={products}
      />
      <Banners />
      <ProductsSection
        title={"featured products"}
        subheading={"featured products of our store"}
        products={products}
      />
    </main>
  );
}

Home.propTypes = {
  props: PropTypes.any,
};

export default Home;
