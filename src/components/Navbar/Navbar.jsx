import "./Navbar.css";
import PropTypes from "prop-types";
import NavMobile from "./NavMobile";

function Navbar() {
  const links = [
    {
      section: "men",
      categories: [
        {
          header: "Men's Suits",
          links: [
            "Summer Cycling Suits",
            "Winter Cycling Suits",
            "Base Layer Suits",
            "Triathlon Suits",
          ],
        },
        {
          header: "Men's Tops",
          links: [
            "Jerseys",
            "Long Sleeve Jerseys",
            "Base Layer Tops",
            "Gilets",
            "Jackets",
          ],
        },
        {
          header: "Men's Bottoms",
          links: [
            "Bib Shorts & MTB Shorts",
            "Bib Tights & Leggings",
            "Base Layer Bottoms",
          ],
        },
        {
          header: "Men's Accessories",
          links: [
            "Short Finger Gloves",
            "Winter Cycling Gloves",
            "Hats & Caps",
            "Warmers",
            "Shoes",
          ],
        },
      ],
    },
    {
      section: "women",
      categories: [
        {
          header: "Women's Suits",
          links: [
            "Summer Cycling Suits",
            "Winter Cycling Suits",
            "Base Layer Suits",
            "Triathlon Suits",
          ],
        },
        {
          header: "Women's Tops",
          links: [
            "Jerseys",
            "Long Sleeve Jerseys",
            "Base Layer Tops",
            "Gilets",
            "Jackets",
          ],
        },
        {
          header: "Women's Bottoms",
          links: [
            "Bib Shorts & MTB Shorts",
            "Bib Tights & Leggings",
            "Base Layer Bottoms",
          ],
        },
        {
          header: "Women's Accessories",
          links: [
            "Short Finger Gloves",
            "Winter Cycling Gloves",
            "Hats & Caps",
            "Warmers",
            "Shoes",
          ],
        },
      ],
    },
    {
      section: "sale",
      categories: [
        {
          header: "Sale Suits",
          links: [
            "Summer Cycling Suits on Sale",
            "Winter Cycling Suits on Sale",
            "Discounted Base Layer Suits",
            "Triathlon Suits on Sale",
          ],
        },
        {
          header: "Sale Tops",
          links: [
            "Jerseys on Sale",
            "Long Sleeve Jerseys on Sale",
            "Discounted Base Layer Tops",
            "Gilets on Sale",
            "Jackets on Sale",
          ],
        },
        {
          header: "Sale Bottoms",
          links: [
            "Bib Shorts & MTB Shorts on Sale",
            "Bib Tights & Leggings on Sale",
            "Discounted Base Layer Bottoms",
          ],
        },
        {
          header: "Sale Accessories",
          links: [
            "Short Finger Gloves on Sale",
            "Winter Cycling Gloves on Sale",
            "Hats & Caps on Sale",
            "Warmers on Sale",
            "Shoes on Sale",
          ],
        },
      ],
    },
    {
      section: "new arrivals",
      categories: [
        {
          header: "New Arrival Suits",
          links: [
            "New Summer Cycling Suits",
            "New Winter Cycling Suits",
            "New Base Layer Suits",
            "New Triathlon Suits",
          ],
        },
        {
          header: "New Arrival Tops",
          links: [
            "New Jerseys",
            "New Long Sleeve Jerseys",
            "New Base Layer Tops",
            "New Gilets",
            "New Jackets",
          ],
        },
        {
          header: "New Arrival Bottoms",
          links: [
            "New Bib Shorts & MTB Shorts",
            "New Bib Tights & Leggings",
            "New Base Layer Bottoms",
          ],
        },
        {
          header: "New Arrival Accessories",
          links: [
            "New Short Finger Gloves",
            "New Winter Cycling Gloves",
            "New Hats & Caps",
            "New Warmers",
            "New Shoes",
          ],
        },
      ],
    },
    {
      section: "size guide",
      categories: [
        {
          header: "Size Guide for Suits",
          links: [
            "Summer Cycling Suits Size Guide",
            "Winter Cycling Suits Size Guide",
            "Base Layer Suits Size Guide",
            "Triathlon Suits Size Guide",
          ],
        },
        {
          header: "Size Guide for Tops",
          links: [
            "Jerseys Size Guide",
            "Long Sleeve Jerseys Size Guide",
            "Base Layer Tops Size Guide",
            "Gilets Size Guide",
            "Jackets Size Guide",
          ],
        },
        {
          header: "Size Guide for Bottoms",
          links: [
            "Bib Shorts & MTB Shorts Size Guide",
            "Bib Tights & Leggings Size Guide",
            "Base Layer Bottoms Size Guide",
          ],
        },
        {
          header: "Size Guide for Accessories",
          links: [
            "Short Finger Gloves Size Guide",
            "Winter Cycling Gloves Size Guide",
            "Hats & Caps Size Guide",
            "Warmers Size Guide",
            "Shoes Size Guide",
          ],
        },
      ],
    },
  ];

  function bringToFront(e) {
    e.preventDefault();
    const menuID = e.target.getAttribute("menu");
    const category = document.getElementById(menuID);
    category.classList.add("active");
  }

  function pushToBack(e) {
    e.preventDefault();
    const menuID = e.target.getAttribute("menu");
    const category = document.getElementById(menuID);
    category.classList.remove("active");
  }

  function turnOn(e) {
    e.preventDefault();
    e.target.classList.add("active");
  }

  function turnOff(e) {
    e.preventDefault();
    e.target.classList.remove("active");
  }

  function turnOnNav(e) {
    e.preventDefault();
    const mobileNav = document.getElementById("nav-mobile");
    mobileNav.classList.add("active");
  }

  return (
    <>
      <header id="navbar">
        <div className="nav-top desktop">
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
            <button
              onClick={(e) => {
                turnOnNav(e);
              }}
              type="button"
              id="hamburger-menu"
              className="nav-button"
            >
              <i className="fa-sharp fa-light fa-bars"></i>
            </button>
            <input
              type="search"
              placeholder="Search"
              name="search"
              className="desktop"
              id="search"
            />
          </div>
          <a className="mid" href="/#">
            <img
              className="nav-logo"
              src="/assets/logo.png"
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
          className="nav-links desktop
      "
        >
          {links.map((link) => (
            <div key={link.section} className="nav-link">
              <a
                onMouseOver={(e) => bringToFront(e)}
                onMouseLeave={(e) => pushToBack(e)}
                menu={link.section.replace(/ /g, "-")}
                href="/#"
              >
                {link.section}
              </a>
              <div
                id={link.section.replace(/ /g, "-")}
                onMouseOver={(e) => turnOn(e)}
                onMouseLeave={(e) => turnOff(e)}
                className="nav-dropdown"
              >
                {link.categories.map((category) => (
                  <section key={category.header} className="nav-dropdown-links">
                    <h4>{category.header}</h4>
                    <ul>
                      {category.links.map((link) => (
                        <a key={link} href="/#">
                          <li>{link}</li>
                        </a>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </header>
      <NavMobile links={links} />
    </>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(PropTypes.string),
};

export default Navbar;
