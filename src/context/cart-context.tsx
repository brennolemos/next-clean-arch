import { createContext, useState } from "react";
import { Product } from "../utils/models";

export type CartContextType = {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  clear: () => void;
  total: number;
};

const defaultContext: CartContextType = {
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  clear: () => {},
  total: 0,
};

export const CartContext = createContext(defaultContext);

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
