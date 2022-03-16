import { Card, CardMedia, Typography } from "@mui/material";
import "./Introduce.styles.css";
import icon1 from "../../../../asset/image/24-hours-support 1.png"
import icon2 from "../../../../asset/image/cashback 1.png"
import icon3 from "../../../../asset/image/free-delivery 1.png"
import icon4 from "../../../../asset/image/premium-quality 1.png"

const Introduce = () => {
  return (
    <section class="introduce">
      <div class="container">
        <h2 class="main-title">What Shopex Offer!</h2>

        <div class="introduce-content d-flex">
          <Card>
            <img src={icon3} />
            <Typography variant="h6">24/7 Support</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </Typography>
          </Card>

          <Card>
            <img src={icon2} />
            <Typography variant="h6">24/7 Support</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </Typography>
          </Card>

          <Card>
            <img src={icon4} />
            <Typography variant="h6">24/7 Support</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </Typography>
          </Card>

          <Card>
            <img src={icon1} />
            <Typography variant="h6">24/7 Support</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
              purus gravida.
            </Typography>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Introduce;
