import "./Navbar.css";
import PropTypes from "prop-types";

function Navbar({ links }) {
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
          <a key={link} href="/#">
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
};

export default Navbar;
