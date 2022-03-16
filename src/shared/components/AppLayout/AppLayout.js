import Footer from "../Footer/Footer";
import Header from "../Header/Header";


const AppLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default AppLayout;
