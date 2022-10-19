import { NextPage } from "next";
import { FormEvent, useContext } from "react";

import { CartContext } from "../../context/cart-context";

const Checkout: NextPage = () => {
  const cartContext = useContext(CartContext);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3>My Cart</h3>
      <ul>
        {cartContext.products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => cartContext.removeProduct(product)}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="credit_card_number">Credit Card</label>
          <input
            type="text"
            name="credit_card_number"
            id="credit_card_number"
          />
        </div>
        <div>
          <button type="submit">Order</button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
