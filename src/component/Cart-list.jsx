import { useState } from "react";
import CartItem from "./CartItem";
import { useEffect } from "react";
import FetchCartList from "../Api/FetchCartList";
import product from "./Product";
import RemoveCart from "../Api/RemoveCart";
import { data } from "autoprefixer";
import convertpricestringtonumberTonumber from "../Api/convertpricestringtonumber";

const CartList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    FetchCartList()
      .then((data) => {
        if (data?.msg === "success") {
          setItems(data?.data);
        }
      })
      .catch((err) => console.log("There was an error"));
  }, []);

  const handleRemovecart = (productId) => {
    RemoveCart(productId)
      .then((data) => {
        if (data?.msg === "success") {
          // remove that item from my local state : items
          const reminingItems = items.filter(
            (item) => item.product.id !== productId
          );

          setItems(reminingItems);
        }
      })
      .catch((err) => console.log("There was an erros"));
  };

  const calculateTotalPrice = () => {
    const totalPrice = items.reduce((total, currentValue) => {
      const price = convertpricestringtonumberTonumber(currentValue);
      return total + price;
    }, 0);
    return totalPrice.toLocaleString();
  };

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="container col-span-2">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">
            {items.map((item) => (
              <CartItem
                key={item?.id}
                product={item.product}
                remove={handleRemovecart}
              />
            ))}
          </div>
        </div>

        <div className="card shadow-xl h-44 w-100 bg-white">
          <div className="card-body">
            <h2 className="card-title">Total Item: 10</h2>
            <h6>Total Price: ${calculateTotalPrice()}</h6>
            <div className="card-actions">
              <button className="btn btn-sm my-4 btn-primary btn-outline">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartList;
