import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { http } from "../../../utils/https";

const CheckoutSuccess: NextPage = () => {
  return (
    <div>
      <h3>Congrats! Order #ID was submited.</h3>

      <ul>
        <li></li>
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
    props: {},
  };
};

export default CheckoutSuccess;
