import { useDispatch, useSelector } from "react-redux";
import { IMG_URL } from "../utils/config";
import { addItem, cartTotal, clearCart } from "../utils/cartSlice";
import { restaurantInfo } from "../utils/restaurantSlice";

const ItemList = (props) => {
  const { items } = props;
  const cartItems = useSelector((store) => store.cart.items);
  const { name, tempName } = useSelector((store) => store.restaurant);
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    if (cartItems.length > 0 && name !== tempName) {
      dispatch(clearCart());
      window.alert(
        "Your cart containing items from other restaurant has been cleared"
      );
    }
    dispatch(addItem(item));
    dispatch(cartTotal());
    dispatch(restaurantInfo());
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="h-52 flex justify-around border-b	border-gray-200 overflow-hidden"
        >
          <div className=" mt-8 min-w-[492px] max-w-[492px]">
            <img
              width="16"
              height="16"
              src={
                item.card.info.isVeg === 1
                  ? "https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                  : "https://img.icons8.com/color/16/non-vegetarian-food-symbol.png"
              }
              alt="vegetarian-food-symbol"
            />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col">
                <p className="m-0">{item.card.info.name}</p>
                <p className="m-0">
                  ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                </p>
              </div>
              <div>{item.card.info.description}</div>
            </div>
          </div>
          <div className="m-4 relative">
            <img
              className="rounded w-40 h-36 border-b	border-gray-200 top-1"
              src={IMG_URL + item.card.info.imageId}
              alt="food-image"
            />
            <div className="flex justify-center relative">
              <button
                className="absolute -bottom-4 px-8 py-2 rounded bg-white text-green-500 border border-gray-300"
                onClick={() => handleAddItems(item.card.info)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;