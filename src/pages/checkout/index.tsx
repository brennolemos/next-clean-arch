import { NextPage } from "next";
import { FormEvent } from "react";

const Checkout: NextPage = () => {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h3>My Cart</h3>
      
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
