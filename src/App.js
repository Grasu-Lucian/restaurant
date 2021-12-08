import Header from "./components/Layout/Header";
import "./App.css";
import Meal from "./components/Meals/Meal";
import { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Cart from "./components/Cart/Cart";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart />}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meal />
      </main>
    </Fragment>
  );
}

export default App;
