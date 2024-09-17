import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

const ProductTile = ({ product }) => {
  const dispatch = useDispatch();
  const {cart} = useSelector(state => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart() {
    dispatch(removeFromCart(product.id));
  }

  return (
    <figure className="group flex flex-col items-center border-2 border-red-900 gap-3 p-4 h-[360px] mt-10 ml-5 rounded-xl">
      <div className="h-[180px]">
        <img
          src={product?.image}
          alt={product?.title}
          className="object-cover
            h-full w-full"
        />
      </div>
      <figcaption className="w-40 truncate mt-3 text-gray-700 text-lg font-bold">
        {product?.title}
      </figcaption>
      <div className="flex items-center justify-center w-full mt-5 ">
        <button
          onClick={cart.some(item => item.id === product.id)? handleRemoveFromCart: handleAddToCart}
          className="bg-red-950 text-white rounded-lg font-bold border-2 p-4"
        >
         {
         cart.some(item => item.id === product.id)? 'Remove from Cart' : 'Add to Cart'
         }
        </button>
      </div>
    </figure>
  );
};

export default ProductTile;
