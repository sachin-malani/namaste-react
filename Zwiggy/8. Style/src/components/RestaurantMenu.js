import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../utils/config";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo.length === 0) return <Shimmer />;

  const { cuisines, costForTwoMessage, name } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.title == "Recommended"
      ? resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
          ?.card?.card
      : resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card;

  return (
    <div className="max-w-[800px] mx-auto">
      <h1 className="text-center">{name}</h1>
      <div className="flex gap-4 mx-16">
        <h3 className="text-orange-400">{cuisines.join(", ")}</h3>
        <h3>~</h3>
        <h3>{costForTwoMessage}</h3>
      </div>
      <h2 className="mx-16">Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <div key={item.card.info.id} className="w-[768px] h-52 flex justify-around border-b	border-gray-200">
            <div className="flex flex-col gap-8 mt-8 min-w-[492px] max-w-[492px]">
              <div className="flex flex-col">
                <p className="m-0">{item.card.info.name}</p>
                <p className="m-0">
                  ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                </p>
              </div>
              <div className="text-ellipsis overflow-hidden">{item.card.info.description}</div>
            </div>
            <div className="m-4 relative">
              <img
                className="rounded w-40 h-36 border-b	border-gray-200 top-1"
                src={IMG_URL + item.card.info.imageId}
                alt="food-image"
              />
              <div className="flex justify-center relative">
                <button className="absolute -bottom-4 px-8 py-2 rounded bg-white text-green-500 border border-gray-300">Add</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;