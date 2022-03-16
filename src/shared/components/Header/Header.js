import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

import "./Header.styles.css";
import "boxicons";

const Header = () => {
  return (
    <header>
      <section class="heading-bar">
        <div class="container">
          <div class="heading-bar-content d-flex justify-content-between">
            <ul class="contact">
              <li class="mail">
                <i class="bx bx-envelope"></i>
                <span>mhhasanul@gmail.com </span>
              </li>

              <li class="phone">
                <i class="bx bx-phone-call"></i>
                <span>(12345)67890</span>
              </li>
            </ul>

            <ul class="action">
              <li class="login">
                <a href="#">
                  Login
                  <i class="bx bx-user"></i>
                </a>
              </li>
              <li class="wishlist">
                <a href="#">
                  Wishlist
                  <i class="bx bx-heart"></i>
                </a>
              </li>
              <li class="cart">
                <a href="#">
                  <i class="bx bx-cart"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="nav-bar">
        <div class="container">
          <div class="nav-bar-content d-flex justify-content-between align-items-center">
            <div class="left d-flex align-items-center">
              <h2 class="brand-name">Hekto</h2>

              <ul>
                <li class="nav-item">
                  <NavLink to="/homepage" activeClassName="activeLink">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/shop-list" activeClassName="activeLink">
                    Shop
                  </NavLink>{" "}
                </li>
                <li class="nav-item">
                  <NavLink to="/blog-list" activeClassName="activeLink">
                    Blog
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/contact" activeClassName="activeLink">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>

            <div class="search right">
              <div class="input-group flex-nowrap">
                <input
                  type="text"
                  class="search-input"
                  aria-describedby="addon-wrapping"
                />
                <span class="search-btn btn" id="search-btn">
                  <i class="bx bx-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
