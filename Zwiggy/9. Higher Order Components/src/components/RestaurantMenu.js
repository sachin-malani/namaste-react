import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../utils/config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);
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

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (x) =>
        x.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="max-w-[800px] mx-auto">
      <h1 className="text-center font-bold text-xl">{name}</h1>
      <div className="flex gap-4 mx-16 justify-center">
        <h3 className="text-orange-400">{cuisines.join(", ")}</h3>
        <h3>~</h3>
        <h3>{costForTwoMessage}</h3>
      </div>
      <h2 className="mx-16 text-center">M E N U</h2>
      {categories.map((category, index) => (
        //Controlled Component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            if (showIndex === index) setShowIndex(null);
            else setShowIndex(index);
          }}
        />
      ))}
      ;
    </div>
  );
};

export default RestaurantMenu;
