import { IMG_URL } from "../utils/config";

export const RestaurantCard = (props) => {
  const { resData } = props;
  const { avgRating, name, cloudinaryImageId, sla, cuisines } = resData.info;
  return (
    <div
      data-testid="resCard"
      className="text-black w-[330px] h-[322px] p-1 hover:scale-90 duration-300"
    >
      <img
        className="border-none h-44 w-full rounded-lg"
        src={IMG_URL + cloudinaryImageId}
        alt="restaurant-image"
      />
      <div className="font-bold">{name}</div>
      <div className="font-medium flex gap-4 items-center">
        <p className="flex items-center">
          <span>
            <img
              className="w-4 h-4"
              src="https://img.icons8.com/windows/32/000000/rating-circled.png"
              alt="rating-circled"
            />
          </span>
          {avgRating}
        </p>
        <p>{sla.slaString}</p>
      </div>
      <div className="opacity-70 my-2">{cuisines.join(", ")}</div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute bg-green-400 top-2 text-white rounded-sm z-10 p-1">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
