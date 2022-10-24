import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { ListProductsUseCase } from "../@core/application/product/list-product.use-case";
import { ProductHttpGateway } from "../@core/infra/gateways/product.gateway";
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
  const gateway = new ProductHttpGateway(http)
  const useCase = new ListProductsUseCase(gateway);
  const products = await useCase.execute();

  return {
    props: {
      products: products.map(product => product.toJSON()),
    },
  };
};
