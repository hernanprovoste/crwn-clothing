import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const App = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </>
  );
};

export default App;
