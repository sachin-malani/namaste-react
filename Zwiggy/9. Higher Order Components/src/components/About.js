import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="m-4">
        <h1 className="font-bold">About Us</h1>
        <div>
          LoggedIn User:
          <UserContext.Consumer>
            {({loggedInUser}) => <span> {loggedInUser}</span>}
          </UserContext.Consumer>
        </div>
        <h3>This is a food ordering app</h3>
        <UserClass name={"Sachin"} location={"Namma Bengaluru"} />
      </div>
    );
  }
}

export default About;
