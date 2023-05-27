import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./utils/store/store";

function App() {
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
