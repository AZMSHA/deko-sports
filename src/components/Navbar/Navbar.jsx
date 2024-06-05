import "./Navbar.css";
import PropTypes from "prop-types";

function Navbar({ links }) {
  function bringToFront(e) {
    e.preventDefault();
    const menuID = e.target.getAttribute("menu");
    const section = document.getElementById(menuID);
    section.classList.add("active");
  }

  function pushToBack(e) {
    e.preventDefault();
    const menuID = e.target.getAttribute("menu");
    const section = document.getElementById(menuID);
    section.classList.remove("active");
  }

  return (
    <header id="navbar">
      <div className="nav-top">
        <div>
          <a href="mailto:sales @dekosports.com">
            Email : sales@dekosports.com
          </a>
          <a href="tel:+52-3613772-75">Tel : 52-3613772-75</a>
        </div>
        <div>
          <a href="/#">
            Wishlist<span>&#40;0&#41;</span>
          </a>
          <select name="currency" id="currency">
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="PKR">PKR</option>
          </select>
        </div>
      </div>
      <div className="nav-mid">
        <div className="left">
          <button type="button" id="hamburger-menu" className="nav-button">
            <i className="fa-sharp fa-light fa-bars"></i>
          </button>
          <input type="search" placeholder="Search" name="search" id="search" />
        </div>
        <a className="mid" href="/#">
          <img
            className="nav-logo"
            src="/src/assets/logo.png"
            alt="Deko Sports Logo"
          />
        </a>
        <div className="right">
          <button type="button" className="nav-button">
            <i className="fa-sharp fa-light fa-user"></i>
            <span>My Account</span>
          </button>
          <button type="button" className="nav-button">
            <i className="fa-sharp fa-light fa-bag-shopping"></i>
            <span>My Cart</span>
          </button>
        </div>
      </div>
      <nav
        className="nav-links
      "
      >
        {links.map((link) => (
          <a
            onMouseOver={(e) => bringToFront(e)}
            onMouseLeave={(e) => pushToBack(e)}
            menu={link.replace(/ /g, "-")}
            key={link}
            href="/#"
          >
            {link}
          </a>
        ))}
      </nav>
      <div className="nav-dropdown">
        <div id="men" className="nav-dropdown-category">
          <section className="nav-dropdown-links">
            <h4>SUITS</h4>
            <ul>
              <a href="/#">
                <li>SUMMER CYCLING SUITS</li>
              </a>
              <a href="/#">
                <li>WINTER CYCLING SUITS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER SUITS</li>
              </a>
              <a href="/#">
                <li>TRIATHLON SUITS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>TOPS</h4>
            <ul>
              <a href="/#">
                <li>JERSEYS</li>
              </a>
              <a href="/#">
                <li>LONG SLEEVE JERSEYS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER TOPS</li>
              </a>
              <a href="/#">
                <li>GILETS</li>
              </a>
              <a href="/#">
                <li>JACKETS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>BOTTOMS</h4>
            <ul>
              <a href="/#">
                <li>BIB SHORTS & MTB SHORTS</li>
              </a>
              <a href="/#">
                <li>BIB TIGHTS & LEGGINGS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER BOTTOMS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>ACCESSORIES</h4>
            <ul>
              <a href="/#">
                <li>SHORT FINGER GLOVES</li>
              </a>
              <a href="/#">
                <li>WINTER CYCLING GLOVES</li>
              </a>
              <a href="/#">
                <li>HATS & CAPS</li>
              </a>
              <a href="/#">
                <li>WARMERS</li>
              </a>
              <a href="/#">
                <li>SHOES</li>
              </a>
            </ul>
          </section>
        </div>
        <div id="women" className="nav-dropdown-category">
          <section className="nav-dropdown-links">
            <h4>SUITS</h4>
            <ul>
              <a href="/#">
                <li>SUMMER CYCLING SUITS</li>
              </a>
              <a href="/#">
                <li>WINTER CYCLING SUITS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER SUITS</li>
              </a>
              <a href="/#">
                <li>TRIATHLON SUITS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>TOPS</h4>
            <ul>
              <a href="/#">
                <li>JERSEYS</li>
              </a>
              <a href="/#">
                <li>LONG SLEEVE JERSEYS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER TOPS</li>
              </a>
              <a href="/#">
                <li>GILETS</li>
              </a>
              <a href="/#">
                <li>JACKETS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>BOTTOMS</h4>
            <ul>
              <a href="/#">
                <li>BIB SHORTS & MTB SHORTS</li>
              </a>
              <a href="/#">
                <li>BIB TIGHTS & LEGGINGS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER BOTTOMS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>ACCESSORIES</h4>
            <ul>
              <a href="/#">
                <li>SHORT FINGER GLOVES</li>
              </a>
              <a href="/#">
                <li>WINTER CYCLING GLOVES</li>
              </a>
              <a href="/#">
                <li>HATS & CAPS</li>
              </a>
              <a href="/#">
                <li>WARMERS</li>
              </a>
              <a href="/#">
                <li>SHOES</li>
              </a>
            </ul>
          </section>
        </div>
        <div id="sale" className="nav-dropdown-category">
          <section className="nav-dropdown-links">
            <h4>SUITS</h4>
            <ul>
              <a href="/#">
                <li>SUMMER CYCLING SUITS</li>
              </a>
              <a href="/#">
                <li>WINTER CYCLING SUITS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER SUITS</li>
              </a>
              <a href="/#">
                <li>TRIATHLON SUITS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>TOPS</h4>
            <ul>
              <a href="/#">
                <li>JERSEYS</li>
              </a>
              <a href="/#">
                <li>LONG SLEEVE JERSEYS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER TOPS</li>
              </a>
              <a href="/#">
                <li>GILETS</li>
              </a>
              <a href="/#">
                <li>JACKETS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>BOTTOMS</h4>
            <ul>
              <a href="/#">
                <li>BIB SHORTS & MTB SHORTS</li>
              </a>
              <a href="/#">
                <li>BIB TIGHTS & LEGGINGS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER BOTTOMS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>ACCESSORIES</h4>
            <ul>
              <a href="/#">
                <li>SHORT FINGER GLOVES</li>
              </a>
              <a href="/#">
                <li>WINTER CYCLING GLOVES</li>
              </a>
              <a href="/#">
                <li>HATS & CAPS</li>
              </a>
              <a href="/#">
                <li>WARMERS</li>
              </a>
              <a href="/#">
                <li>SHOES</li>
              </a>
            </ul>
          </section>
        </div>
        <div id="new-arrival" className="nav-dropdown-category">
          <section className="nav-dropdown-links">
            <h4>SUITS</h4>
            <ul>
              <a href="/#">
                <li>SUMMER CYCLING SUITS</li>
              </a>
              <a href="/#">
                <li>WINTER CYCLING SUITS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER SUITS</li>
              </a>
              <a href="/#">
                <li>TRIATHLON SUITS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>TOPS</h4>
            <ul>
              <a href="/#">
                <li>JERSEYS</li>
              </a>
              <a href="/#">
                <li>LONG SLEEVE JERSEYS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER TOPS</li>
              </a>
              <a href="/#">
                <li>GILETS</li>
              </a>
              <a href="/#">
                <li>JACKETS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>BOTTOMS</h4>
            <ul>
              <a href="/#">
                <li>BIB SHORTS & MTB SHORTS</li>
              </a>
              <a href="/#">
                <li>BIB TIGHTS & LEGGINGS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER BOTTOMS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>ACCESSORIES</h4>
            <ul>
              <a href="/#">
                <li>SHORT FINGER GLOVES</li>
              </a>
              <a href="/#">
                <li>WINTER CYCLING GLOVES</li>
              </a>
              <a href="/#">
                <li>HATS & CAPS</li>
              </a>
              <a href="/#">
                <li>WARMERS</li>
              </a>
              <a href="/#">
                <li>SHOES</li>
              </a>
            </ul>
          </section>
        </div>
        <div id="size-guide" className="nav-dropdown-category">
          <section className="nav-dropdown-links">
            <h4>SUITS</h4>
            <ul>
              <a href="/#">
                <li>SUMMER CYCLING SUITS</li>
              </a>
              <a href="/#">
                <li>WINTER CYCLING SUITS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER SUITS</li>
              </a>
              <a href="/#">
                <li>TRIATHLON SUITS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>TOPS</h4>
            <ul>
              <a href="/#">
                <li>JERSEYS</li>
              </a>
              <a href="/#">
                <li>LONG SLEEVE JERSEYS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER TOPS</li>
              </a>
              <a href="/#">
                <li>GILETS</li>
              </a>
              <a href="/#">
                <li>JACKETS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>BOTTOMS</h4>
            <ul>
              <a href="/#">
                <li>BIB SHORTS & MTB SHORTS</li>
              </a>
              <a href="/#">
                <li>BIB TIGHTS & LEGGINGS</li>
              </a>
              <a href="/#">
                <li>BASE LAYER BOTTOMS</li>
              </a>
            </ul>
          </section>
          <section className="nav-dropdown-links">
            <h4>ACCESSORIES</h4>
            <ul>
              <a href="/#">
                <li>SHORT FINGER GLOVES</li>
              </a>
              <a href="/#">
                <li>WINTER CYCLING GLOVES</li>
              </a>
              <a href="/#">
                <li>HATS & CAPS</li>
              </a>
              <a href="/#">
                <li>WARMERS</li>
              </a>
              <a href="/#">
                <li>SHOES</li>
              </a>
            </ul>
          </section>
        </div>
      </div>
    </header>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
};

export default Navbar;
