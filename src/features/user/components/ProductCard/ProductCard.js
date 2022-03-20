import "bootstrap/dist/css/bootstrap.min.css";

import "./ProductCard.styles.css";


const ProductCard = ({product}) =>{
  return (
    <div class="card">
    <div class="image-product">
      <ul class="icon">
        <li class="icon-item cart">
          <i class="bx bx-cart"></i>
        </li>
        <li class="icon-item heart">
          <i class="bx bx-heart"></i>
        </li>
      </ul>
      <img src={process.env.PUBLIC_URL + "/asset/image/image 1168.png"} alt="" />

      <button class="btn btn-view-detail">View Details</button>
    </div>
    <div class="product-detail">
      <h5 class="name-product">{product.name}</h5>
      <h6 class="code-product">Code - {product.code}</h6>
      <h6 class="price-product">$ {product.price}</h6>
    </div>
  </div>
  )

}
export default ProductCard;