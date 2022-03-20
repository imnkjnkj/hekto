import "bootstrap/dist/css/bootstrap.min.css";

import "./Promotion.styles.css";


const Promotion = () => {

  return (
    <section class="promotional">
      <div class="container">
        <div class="promo-content row">
          <div class="promo-text col-md-7">
            <h5>Best Furniture For Your Castle....</h5>
            <h1>New Furniture Collection Trends in 2020</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button class="btn btn-shop-now">Shop Now</button>
          </div>
          <div class="promo-image col-md-5">
            <img
              src={process.env.PUBLIC_URL + "/asset/image/sofa-promotional.png"}
              alt=""
              class="bg-promo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
