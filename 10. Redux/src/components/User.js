import { useState } from "react";

const User = ({name}) => {

    const[count, setCount] = useState(0);

    return(
        <div className="user-card">
            <div>Count = {count}</div>
            <h2>Name: {name}</h2>
            <h4>Location: Bengaluru</h4>
            <h4>Contact: @sachin-malani</h4>
        </div>
    )
}

export default User;