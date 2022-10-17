import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { http } from "../utils/https";
import { Product } from "../utils/models";

type HomeProps = {
  products: Product[];
};

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div>
      <h1>Ecommerce</h1>

      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            <label>Name: </label> {product.name}
            <Link href={`/products/${product.id}`} passHref>
              <a href="">Ver detalhes</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data: products } = await http.get("products");

  return {
    props: {
      products,
    },
  };
};
