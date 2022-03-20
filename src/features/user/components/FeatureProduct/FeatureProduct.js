import "bootstrap/dist/css/bootstrap.min.css";
import "./FeaureProduct.styles.css"
import ProductCard from "../ProductCard/ProductCard"
import { useSelector } from "react-redux";
import { productsSelector } from "../../stores/userSelector";

const FeatureProduct = () => {
  const productsList = useSelector(productsSelector);
  // console.log(products);
  const products= productsList.slice(1,5);
  return (
    <section className="featured-products">

    <div className="container">
      <h2 className="main-title">Featured Products</h2>

      <div className="featured-products-content d-flex">
        {products?.map(product=>(
          <ProductCard product={product} key={product.id} />

        ))}
      </div>
    </div>
    </section>
  );
};

export default FeatureProduct;
