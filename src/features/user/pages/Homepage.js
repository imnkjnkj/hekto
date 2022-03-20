import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getProductsThunk } from "../stores/asyncThunk";

import AppLayout from "../../../shared/components/AppLayout/AppLayout";
import Promotion from "../components/Promotion/Promotion";
import FeatureProduct from "../components/FeatureProduct/FeatureProduct"
import Introduce from "../components/Introduce/Introduce";
import Banner from "../components/Banner/Banner";
import BlogView from "../components/BlogView/BlogView";
const HomePage = ()=>{

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);
  
  return (
    <AppLayout>
    <Promotion />
    <FeatureProduct />
    <Introduce />
    <Banner />
    <BlogView />
    </AppLayout>
  )
}
export default HomePage;