import "./Footer.css";
import { useEffect, useState } from "react";

function Footer() {
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

    const trigger = document.querySelector("#newsletter .img-trigger");
    if (!trigger) return; // Make sure the trigger element exists

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

    observer.observe(trigger);

    // Cleanup function
    return () => {
      observer.unobserve(trigger);
    };
  }, [domLoaded]);
  return (
    <footer id="main-footer">
      <aside id="newsletter">
        <form action="/#">
          <h2>newsletter!</h2>
          <label htmlFor="email">
            It only takes a second to be the first to find out about our latest
            news
          </label>
          <div className="form-field">
            <input
              placeholder="Your email address"
              type="email"
              name="email"
              id="email"
            />
            <button type="submit">submit</button>
          </div>
        </form>
        <div className="img-trigger">
          <img
            src="/src/assets/footer-img.png"
            alt="Cyclist wearing Deko Sportswear"
          />
        </div>
      </aside>
      <nav id="footer-nav">
        <section className="footer-section">
          <h3>Contact us</h3>
          <ul>
            <a
              target="-blank"
              href="https://www.google.com/maps/place/Hajipura,+Sialkot,+Punjab+51310,+Pakistan/@32.4800752,74.5203035,15z/data=!4m6!3m5!1s0x391eea713c2fc4a1:0x37f2d98d9e807363!8m2!3d32.4800761!4d74.5306247!16s%2Fg%2F11nx0rs_hj?entry=ttu"
            >
              <li>
                <i className="fa-sharp fa-solid fa-location-dot"></i>
                Sialkot,Punjab,51310,Pakistan.
              </li>
            </a>
            <a href="tel:+92-52-3613772-75">
              <li>
                <i className="fa-sharp fa-solid fa-phone-office"></i>
                &#40;+92&#41;52-3613772-75
              </li>
            </a>
            <a href="mailto:sales@dekosports.com">
              <li>
                <i className="fa-sharp fa-solid fa-envelope"></i>
                sales@dekosports.com
              </li>
            </a>
            <a target="_blank" href="https://www.dekosports.eu.com">
              <li>
                <i className="fa-light fa-globe-pointer"></i>
                www.dekosports.eu.com
              </li>
            </a>
          </ul>
        </section>
        <section className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <a href="/#">
              <li>HOME</li>
            </a>
            <a href="/#">
              <li>ABOUT</li>
            </a>
            <a href="/#">
              <li>PRODUCTS</li>
            </a>
            <a href="/#">
              <li>BLOG</li>
            </a>
            <a href="/#">
              <li>CONTACT</li>
            </a>
          </ul>
        </section>
        <section className="footer-section">
          <h3>Help</h3>
          <ul>
            <a href="/#">
              <li>Search</li>
            </a>
            <a href="/#">
              <li>Help</li>
            </a>
            <a href="/#">
              <li>Information</li>
            </a>
            <a href="/#">
              <li>Privacy Policy</li>
            </a>
            <a href="/#">
              <li>Shipping Information</li>
            </a>
          </ul>
        </section>
        <article className="footer-section">
          <h3>About Us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s,
          </p>
        </article>
      </nav>
      <div id="footer-copyright">
        <p>
          Copyright &copy; 2020 Sports Konnection all rights reserved. Powered
          by NJ Dynamic Solutions.
        </p>
        <div className="payment-options">
          <span>payment acceptable on</span>
          <img
            src="/src/assets/payment-options.png"
            alt="Our Payment Options"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
