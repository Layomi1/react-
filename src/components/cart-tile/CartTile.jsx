import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

const CartTile = ({ cartItem }) => {

  const dispatch = useDispatch()
  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id))
  }

  return (
    <>
      <div className="flex items-center justify-between p-5  bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="flex p-3 items-center">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-28 w-28 rounded-lg "
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-md text-white font-bold ">{cartItem?.title}</h1>
            <p className="text-white font-extrabold">${cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white rounded-lg font-bold border-2 p-4 text-nowrap"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default CartTile;
