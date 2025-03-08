import React from "react";
import { useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Ali", email: "ali@example.com" },
  { id: 2, name: "Ahmed", email: "ahmed@example.com" },
  { id: 3, name: "Sara", email: "sara@example.com" },
];

function UserDetails() {
  const { id } = useParams();
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserDetails;
