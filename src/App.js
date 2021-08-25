import NavBar from "./Components/Header/NavBar";
import Cart from "./Components/Cart/Cart";
import ProductPage from "./Components/Body/ProductPage";
import { useSelector } from "react-redux";
import DetailPage from "./Components/Details/DetailPage";
import CheckOut from "./Components/CheckOut/CheckOut";

function App() {
  const cartVisible = useSelector((state) => state.displayCart.cartIsVisible);
  const detailPageVisible = useSelector(
    (state) => state.updateDetails.detailsVisible
  );
  const checkOutPageVisible = useSelector(
    (state) => state.updateCheckOut.checkOutVisible
  );

  return (
    <div className="app">
      {checkOutPageVisible && <CheckOut />}
      {detailPageVisible && <DetailPage />}
      {!detailPageVisible && !checkOutPageVisible && <NavBar />}
      {!detailPageVisible && !checkOutPageVisible && cartVisible && <Cart />}
      {!detailPageVisible && !checkOutPageVisible && <ProductPage />}
    </div>
  );
}

export default App;
