import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL, IMG_URL } from "../utils/config";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setResInfo(json);
  };

  if (resInfo.length === 0) return <Shimmer />;

  const { cuisines, costForTwoMessage, name } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  // if(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //   ?.card?.itemCards === undefined) console.log("Hi There");

  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.title == "Recommended"
      ? resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
          ?.card?.card
      : resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
          ?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <div className="cuisines-cost">
        <h3 className="menu-cuisines">{cuisines.join(", ")}</h3>
        <h3>~</h3>
        <h3>{costForTwoMessage}</h3>
      </div>
      <h2 className="menu-title">Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <div key={item.card.info.id} className="items">
            <div className="item-details">
              <div className="itemNamePrice">
                <p className="item-name">{item.card.info.name}</p>
                <p className="item-price">
                  ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                </p>
              </div>
              <div className="item-desc">{item.card.info.description}</div>
            </div>
            <div className="item-image">
              <img
                width="156"
                height="144"
                className="food-img"
                src={IMG_URL + item.card.info.imageId}
                alt="food-image"
              />
              <div className="item-btn-container">
                <button className="item-submit-btn">Add</button>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
