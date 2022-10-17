import { useContext } from "react";

import { CartContext } from "../context/cart-context";

const Cart = () => {
  const cartContext = useContext(CartContext);

  return <nav>
    Cart - Total: {cartContext.total} | Items {cartContext.products.length}
  </nav>;
};

export default Cart;
