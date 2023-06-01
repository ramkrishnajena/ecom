import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./utils/store/store";
import { useEffect } from "react";
import { callProducts } from "./utils/store/productSlice";
import { callProductsCategories } from "./utils/store/categoriesSlice";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const store = useSelector((store) => store);

  useEffect(() => {
    dispatch(callProducts());
    dispatch(callProductsCategories());
    token && dispatch(setUser(token));
  }, []);

  return (
    <main className='w-full h-full bg-gray-100'>
      <Header />
      {!store.products.products.length ? <Loading /> : <Outlet />}
      <Footer />
    </main>
  );
}

export default App;
