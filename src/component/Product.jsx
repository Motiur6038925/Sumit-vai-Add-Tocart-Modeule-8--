import React from "react";
import createCart from "../Api/createCart";
import { data } from "autoprefixer";

const product = ({ product }) => {
  const handleAddtoCart = () => {
    createCart(product.id)
      .then((data) => {
        if (data?.msg == "success") {
          alert("The product was added to cart");
        }
      })
      .catch((err) => console.log("There was an error"));
  };


  return (
    <div className="card w-100 bg-white shadow-xl">
      <figure>
        <img src={product.image} alt="alo" />
      </figure>
      <div className="card-body">
        <h6 className="text-black">{product.title}</h6>
        <p className="text-sm text-gray-400">{product.short_des}</p>
        <h6 className="font-bold">Price: ${product.price}</h6>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddtoCart}
            className="btn btn-sm btn-outline btn-primary"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default product;
