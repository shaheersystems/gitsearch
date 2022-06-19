import React from "react";
function Profile(props) {
  return (
    <div className="profile">
      <div className="main">
        <img src={props.avatar} alt="avatar" />
        <h2>{props.name}</h2>
      </div>
      <div className="desc">{props.desc}</div>
    </div>
  );
}
export default Profile;
