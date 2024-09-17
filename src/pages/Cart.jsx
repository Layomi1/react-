import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile/CartTile";

const Cart = () => {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
 console.log(cart);
 
  return (
    <div className=" flex py-5 px-20  justify-center">
      {cart && cart.length ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-5xl mx-auto">
            <div className="flex flex-col items-center p-3">
              {
              cart.map((cartItem) => <CartTile cartItem={cartItem}/>)}
            </div>
          </div>
          <div className="w-[40%]">
            <div className="flex flex-col justify-center items-end  space-y-5 mt-14 ">
              <h1 className="font-bold text-lg text-red-800">
                Your Cart Summary
              </h1>
              <p>
                <span className="text-gray-800 font-bold ">Total Items : </span>
                <span>{cart.length}</span>
              </p>

              <p>
                <span className="text-gray-800 font-bold ">
                  Total Amount :{" "}
                </span>
                <span>${totalCart}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800  font-bold text-xl mb-2">
            Your Cart is empty
          </h1>
          <Link to={"/"}>
            <button className="bg-red-950 text-white rounded-lg font-bold border-2 p-4">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
    // <div className="flex justify-center">
    //    {cart && cart.length > 0 ? (
    //     <>
    //       <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
    //         <div className="flex flex-col items-center justify-center p-3">
    //           {cart.map((cartItem) => (
    //             <CartTile />
    //           ))}
    //         </div>
    //       </div>
    //       <div className="w-[300px] ">
    //         <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14 ">
    //           <h1 className="font-bold text-lg text-red-800">
    //             Your Cart Summary
    //           </h1>
    //           <p>
    //             <span className="text-gray-800 font-bold ">Total Items : </span>
    //             <span>{cart.length}</span>
    //           </p>

    //           <p>
    //             <span className="text-gray-800 font-bold ">
    //               Total Amount :{" "}
    //             </span>
    //             <span>${totalCart}</span>
    //           </p>
    //         </div>
    //       </div>
    //     </>
    //   )
    //   : (
    //     <div className="min-h-[80vh] flex flex-col items-center justify-center">
    //
    //
    //     </div>
    //   )}
    // </div>
  );
};
export default Cart;
