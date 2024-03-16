import React from "react";
import "../style/singleuser.css"
const SingleUser = ({ user }) => {
  return (
    <div className="single">
      <div>
        <img src={user?.picture.large} alt="profile"/>
      </div>
      <div className="info">
        {" "}
        <p>{user?.name.first} {user?.name.last} </p>
        <p> Email : {user?.email} </p>
        <p> {user?.location.city} | {user?.location.country} </p>
      </div>
    </div>
  );
};

export default SingleUser;
