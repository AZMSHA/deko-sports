import "./Banners.css";
import { useEffect, useState } from "react";

function Banners() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    const handleDOMContentLoaded = () => {
      setDomLoaded(true);
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
    } else {
      setDomLoaded(true); // If DOM is already loaded
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
    };
  }, []);

  useEffect(() => {
    if (!domLoaded) return;

    const elements = document.querySelectorAll(
      '.banners article[class^="banner"]'
    );
    if (!elements) return; // Make sure the trigger element exists

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the class when the element is in the viewport
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); // Stop observing the element
        } else {
          // Remove the class when the element is not in the viewport
          entry.target.classList.remove("animate");
        }
      });
    }, options);

    elements.forEach((element) => observer.observe(element));

    // Cleanup function
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [domLoaded]);

  return (
    <section className="banners">
      <article className="banner1">
        <h2>
          choose the best <span>cycling gloves</span>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <button type="button">view all products</button>
      </article>
      <article className="banner2">
        <h2>
          choose the best <span>cycling shoes</span>
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <button type="button">view all products</button>
      </article>
    </section>
  );
}

export default Banners;
