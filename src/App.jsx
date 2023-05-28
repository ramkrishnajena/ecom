import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import store from "./utils/store/store";
import { useEffect } from "react";
import { callProducts } from "./utils/store/productSlice";
import { callProductsCategories } from "./utils/store/categoriesSlice";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(callProducts());
    dispatch(callProductsCategories());
    token && dispatch(setUser(token));
  }, []);

  return (
    <Provider store={store}>
      <main className='w-full h-full bg-gray-100'>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </Provider>
  );
}

export default App;
