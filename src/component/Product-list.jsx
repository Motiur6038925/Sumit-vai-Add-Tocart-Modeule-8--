import { useEffect, useState } from "react";

import fetchProduct from "../Api/FetchProduct";
import Product from "./Product";
import { data } from "autoprefixer";
const ProductList = () => {
  const [products, setproducts] = useState([]);

  const [error, setErro] = useState("");

  useEffect(() => {
    fetchProduct()
      .then((data) => setproducts(data))
      .catch((err) => console.log(err));
  }, []);

  let output;

  if (error) {
    output = <div> There was an erros </div>;
  } else if (products?.length > 0) {
    output = products.map((product) => (
      <Product key={product.id} product={product} />
    ));
  } else {
    <div> no product found</div>;
  }

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {output};
      </div>
    </div>
  );
}

export default ProductList;
