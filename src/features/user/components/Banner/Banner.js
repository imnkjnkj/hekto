import { Typography, Button } from "@mui/material";
// import { Button } from "bootstrap";
import "./Banner.styles.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text d-flex justify-content-center">
        <Typography variant="h4">
          Get Leatest Update By Subscribe 0ur Newslater
        </Typography>
      </div>
      <div className=" d-flex justify-content-center">
        <button className="btn btn-shop-now ">Shop Now</button>
      </div>
    </div>
  );
};
export default Banner;
