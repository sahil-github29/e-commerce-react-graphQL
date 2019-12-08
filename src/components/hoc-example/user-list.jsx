import React from "react";
import withData from "./with-data-hoc";

const UserList = ({ data }) => (
  <div className="container">
    <h1>User List</h1>
    Post :
    {data.map(user => (
      <div className="user" key={user.id}>
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
      </div>
    ))}
  </div>
);

export default withData(UserList, "https://jsonplaceholder.typicode.com/users");
