import "./NavMobile.css";

function NavMobile({ links }) {
  function turnOffNav(e) {
    e.preventDefault();
    const mobileNav = document.getElementById("nav-mobile");
    mobileNav.classList.remove("active");
  }

  function toggle(e) {
    e.preventDefault();
    const menuID = e.target.getAttribute("menu");
    const element = document.getElementById(menuID);
    if (element.classList.contains("active")) {
      element.classList.remove("active");
      console.log(menuID, "remove");
    } else {
      element.classList.add("active");
      console.log(menuID, "add");
    }
  }

  return (
    <nav id="nav-mobile">
      <img className="nav-logo" src="/assets/logo.png" alt="Deko Sports Logo" />
      <button
        onClick={(e) => {
          turnOffNav(e);
        }}
        id="nav-close"
      >
        <i className="fa-light fa-xmark"></i>
      </button>
      <input type="search" placeholder="Search" name="search" id="search" />
      <div className="nav-links-mobile">
        {links.map((link) => (
          <div
            id={"mobile" + link.section.replace(/ /g, "-")}
            key={link.section}
            className="nav-link"
          >
            <h3
              menu={"mobile" + link.section.replace(/ /g, "-")}
              onClick={(e) => toggle(e)}
            >
              {link.section}
            </h3>
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
        ))}
      </div>
      <div className="nav-top mobile">
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
    </nav>
  );
}

export default NavMobile;
