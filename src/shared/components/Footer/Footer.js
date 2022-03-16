import { Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

import "./Footer.styles.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content d-flex justify-content-between">
          <div className="contact">
            <Typography variant="h4">Hekto</Typography>
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="sign-in-input"
                aria-describedby="addon-wrapping"
                placeholder="Enter Email Address"
              />
              <span class="sign-in-btn btn" id="sign-in-btn">
                Sign Up
              </span>
            </div>
            <Typography variant="body1">Contact Info</Typography>
            <Typography variant="body1">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </Typography>
          </div>
          <div className="catagories">
            <Typography variant="h6">Categories</Typography>
            <ul>
              <li>
                <a>Sofa</a>
              </li>
              <li>
                <a>Kitchen</a>
              </li>
              <li>
                <a>Living room</a>
              </li>
            </ul>
          </div>
          <div className="customer-care">
            <Typography variant="h6">Customer Care</Typography>
            <ul>
              <li>
                <a>My Account</a>
              </li>
              <li>
                <a>Order History</a>
              </li>
            </ul>
          </div>
          <div className="pages">
            <Typography variant="h6">Pages</Typography>
            <ul>
              <li>
                <NavLink to="/shop-list" activeClassName="activeLink">
                  Shop
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to="/blog-list" activeClassName="activeLink">
                  Blog
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="coppy-write d-flex justify-content-around align-content-center">
        <Typography>©Webecy - All Rights Reserved</Typography>
        <div className="social">
          <a>
            <i class="bx bxl-facebook-circle"></i>
          </a>
          <a>
            <i class="bx bxl-instagram-alt"></i>{" "}
          </a>
          <a>
            <i class="bx bxl-twitter"></i>{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
