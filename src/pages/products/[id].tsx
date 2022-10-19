import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { http } from "../../utils/https";
import { Product } from "../../utils/models";

type ProductDetailProps = {
  product: Product;
};

const ProductDetail: NextPage<ProductDetailProps> = ({ product }) => {
  const cartContext = useContext(CartContext);

  return (
    <div>
      <h3>{product.name}</h3>
      <label>Price:</label>
      {product.price}
      <button onClick={() => cartContext.addProduct(product)}>
        Add to cart
      </button>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params || {};
  const { data: product } = await http.get(`products/${id}`);

  return {
    props: { product },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default ProductDetail;
