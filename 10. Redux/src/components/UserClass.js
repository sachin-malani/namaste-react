import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Dummy",
        location: "Default",
      }
    };
  }

  async componentDidMount() {
    //To make API call.
    //Once the component is loaded, then componentDidMount() is called.
    //Same as useEffect().
    //You can make componentDidMount() as an async function

    const data = await fetch("https://api.github.com/users/sachin-malani");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log(json);
  }

  render() {
    // const { name, location } = this.props; //Props
    const { name, location } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="p-4 border border-black">
        <div>Count = {count}</div>
        <button className="border border-black"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment
        </button>
        <h2>Name: {name}</h2>
        <h4>Location: {location}</h4>
        <h4>Contact: @sachin-malani</h4>
      </div>
    );
  }
}

export default UserClass;
