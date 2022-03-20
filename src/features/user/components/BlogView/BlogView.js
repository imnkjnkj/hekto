import "./BlogView.styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BlogViewCard from "../BlogViewCard/BlogViewCard";

const BlogView = () => {
  return (
    <div className="blog-view">
      <h2 class="main-title">Leatest Blog</h2>
      <div className="container d-flex">
      <BlogViewCard />
      <BlogViewCard />

      <BlogViewCard />


      </div>
    </div>
  );
};
export default BlogView;
