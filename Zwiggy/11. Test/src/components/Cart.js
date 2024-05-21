import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { IMG_URL } from "../utils/config";
import EmptyCart from "./EmptyCart";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.total);
  const { name, location, imageId } = useSelector((store) => store.restaurant);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  const deleteItem = (index) => {
    dispatch(removeItem(index));
  };

  return cartItems.length === 0 ? (
    <EmptyCart />
  ) : (
    <div className="my-4 mx-auto p-4 w-3/5 flex flex-col items-center">
      <div className="text-2xl text-center font-bold">Cart</div>
      <div className="w-6/12 m-auto">
        <div className="text-center">
          <button
            className="border border-black p-2 bg-black text-white rounded-lg"
            onClick={handleClear}
          >
            Clear Cart
          </button>
        </div>
        <div className="w-96 mx-auto shadow-md flex items-center flex-col">
          <div className="my-10 flex gap-4">
            <div>
              <img
                className="border-none"
                width="60"
                height="60"
                src={IMG_URL + imageId}
                alt="restaurant-image"
              />
            </div>
            <div className="flex flex-col border-b-2 border-black">
              <p className="font-bold">{name}</p>
              <p>{location}</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-72">
            {cartItems.map((info, index) => (
              <div
                data-testid="cart"
                className="flex justify-between gap-2 items-center"
                key={index}
              >
                <div>
                  <img
                    width="16"
                    height="16"
                    src={
                      info.isVeg === 1
                        ? "https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                        : "https://img.icons8.com/color/16/non-vegetarian-food-symbol.png"
                    }
                    alt="vegetarian-food-symbol"
                  />
                </div>
                <div className="w-1/2">{info.name}</div>
                <div className="flex items-center gap-4">
                  <div>
                    <button onClick={() => deleteItem(index)}>
                      <img
                        width="16"
                        height="16"
                        src="https://img.icons8.com/material-rounded/16/trash.png"
                        alt="trash"
                      />
                    </button>
                  </div>
                  <div className="text-center">₹{info.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between w-72 my-4 border-y-2 border-black">
            <div className="">Item Total</div>
            <div>₹{total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
