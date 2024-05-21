import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import logo from './assets/logo.png'; // Import the image
import profile from './assets/profile.png'; // Import the image


const Title = () => <h1 className="head">Title functional component</h1>;

const title = <h1 className="head">Title element</h1>;

// const heading = React.createElement("h1",{id:"heading"},"Hi There from react");
const jsxHeading = (
  <h1 className="heading" tabIndex="5">
    Hi there from react jsx
  </h1>
);
// {} we can write any peice of JS code in curly braces
const HeadingComponent = () => (
  <div id="container">
    {title}
    <Title />
    <h1>React functional component</h1>
  </div>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading); //Render a react element
// root.render(<HeadingComponent />); //Render a react functional component

//Header Component
const Header = () => {
  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <input className="searchBox" type="text" placeholder="Search" />
      <img src={profile} alt="Logo" />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(<Header />);