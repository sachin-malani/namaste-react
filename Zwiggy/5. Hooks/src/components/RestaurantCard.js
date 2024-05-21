import { IMG_URL } from "../utils/config";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { avgRating, name, cloudinaryImageId, sla, cuisines } = resData.info;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={IMG_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <div className="restaurant-name">{name}</div>
      <div className="rating-eta">
        <p className="rating">
          <span>
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/windows/32/000000/rating-circled.png"
              alt="rating-circled"
            />
          </span>
          {avgRating}
        </p>
        <p>{sla.slaString}</p>
      </div>
      <div className="cuisine">{cuisines.join(", ")}</div>
    </div>
  );
};