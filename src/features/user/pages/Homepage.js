import AppLayout from "../../../shared/components/AppLayout/AppLayout";
import Promotion from "../components/Promotion/Promotion";
import FeatureProduct from "../components/FeatureProduct/FeatureProduct"
import Introduce from "../components/Introduce/Introduce";
import Banner from "../components/Banner/Banner";
const HomePage = ()=>{
  return (
    <AppLayout>
    <Promotion />
    <FeatureProduct />
    <Introduce />
    <Banner />
    </AppLayout>
  )
}
export default HomePage;