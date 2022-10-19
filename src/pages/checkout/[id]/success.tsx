import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { http } from "../../../utils/https";
import { Order } from "../../../utils/models";

type CheckoutSuccessProps = {
  order: Order;
};

const CheckoutSuccess: NextPage<CheckoutSuccessProps> = ({ order }) => {
  return (
    <div>
      <h3>Congrats! Order {order.id} was submited.</h3>

      <ul>
        {order.products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params || {};
  const { data: order } = await http.get(`orders/${id}`);

  return {
    props: { order },
  };
};

export default CheckoutSuccess;
