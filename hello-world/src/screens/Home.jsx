import React from "react";
import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "Ali", email: "ali@example.com" },
  { id: 2, name: "Ahmed", email: "ahmed@example.com" },
  { id: 3, name: "Sara", email: "sara@example.com" },
];

function Home() {
  return (
    <div>
      <h1>User List</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {users.map((user) => (
          <div key={user.id} style={{ border: "1px solid black", padding: "10px" }}>
            <h3>{user.name}</h3>
            <Link to={`/user/${user.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
