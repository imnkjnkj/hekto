import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaureProduct.styles.css"
import ProductCard from "../ProductCard/ProductCard"
const FeatureProduct = () => {
  return (
    <section class="featured-products">

    <div class="container">
      <h2 class="main-title">Featured Products</h2>

      <div class="featured-products-content d-flex">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

      </div>
    </div>
    </section>
  );
};

export default FeatureProduct;
