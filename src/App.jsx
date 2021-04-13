import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-out.component";
import { auth } from "./firebase/firebase-utils";

const App = () => {
  const initialState = {
    currentUser: null,
  };

  const [user, setUser] = useState(initialState);

  const unsubscribeFromAuth = () => {
    return null;
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser({ currentUser: user });
    });

    unsubscribeFromAuth();
  }, []);

  return (
    <>
      <Header currentUser={user.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </>
  );
};

export default App;
