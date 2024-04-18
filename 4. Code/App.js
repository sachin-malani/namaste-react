import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";
import resObject from "./Data";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Static Data
// const RestaurantCard = ({ resName, cuisine, rating, eta, img } ) => {} //It is same as below,

// const RestaurantCard = (props) => {
//   const { resName, cuisine, rating, eta, img } = props;
//   return (
//     <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img className="restaurant-logo" src={img} alt="restaurant-image" />
//       <div className="restaurant-name">{resName}</div>
//       <div className="rating">
//         <p>{rating}</p>
//         <p>{eta}</p>
//       </div>
//       <div className="cuisine">{cuisine}</div>
//     </div>
//   );
// };

// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search">Search</div>
//       <div className="restaurant-container">
//         <RestaurantCard
//           resName="Cafe Amudham"
//           cuisine="South Indian, Snacks"
//           rating="4.6"
//           eta="25-30min"
//           img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e62351117b87978ba8af4c541d834053"
//         />
//         <RestaurantCard
//           resName="Haldiram's Restaurant"
//           cuisine="North Indian,South Indian,Briyani, Chinese"
//           rating="4.3"
//           eta="20-25min"
//           img="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1abb89624b491497c8cff182d95ac457"
//         />
//       </div>
//     </div>
//   );
// };

//Dynamic Data
const RestaurantCard = (props) => {
  const { resData } = props;
  const { avgRating, name, cloudinaryImageId, sla, cuisines } = resData.info;
  return (
    <div className="restaurant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="restaurant-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
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

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {resObject.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);