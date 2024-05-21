import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";
import { useDispatch } from "react-redux";
import { addRestaurantInfo } from "../utils/restaurantSlice";

const Body = () => {
  //State Variable
  const [searchText, setSearchText] = useState("");

  const { listOfRestaurants, filteredRestaurant, updateData } =
    useRestaurantList();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const status = useOnlineStatus();
  if (status === false)
    return (
      <h1>
        Look's like you're offline!! Please check your internet connection
      </h1>
    );

  const { setUserName, loggedInUser } = useContext(UserContext);

  const dispatch = useDispatch();

  const restaurantClick = (restaurant) => {
    dispatch(addRestaurantInfo(restaurant));
  }

  //Conditional Rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex flex-col gap-4 m-2">
      <div className="flex items-center gap-20">
        <div className="flex items-center">
          <input
            type="text"
            className="border border-solid border-black"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mx-2"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              updateData(filteredList);
            }}
          >
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/3d-fluency/94/search.png"
              alt="search"
            />
          </button>
        </div>
        <button
          className="px-4 py-1 bg-gray-100 rounded-lg"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            updateData(filteredList);
          }}
        >
          Top Rated
        </button>
        <div>
          <label>UserName :</label>
          <input
            className="border border-black px-2"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            style={{ textDecoration: "none" }}
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            onClick={() => restaurantClick(restaurant.info)}
          >
            {restaurant.info.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
