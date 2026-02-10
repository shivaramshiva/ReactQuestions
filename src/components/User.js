import { useState } from "react";
const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 style={{ color: 'green', textTransform: 'uppercase' }}>Functional User Component</h1>
      <h2>This is User Profile Page</h2>
      <p>Welcome to the user profile page. Here you can view and edit your profile information.</p>
      <h2>Name: {props.name}</h2>
      <h2>Location: {props.location}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Count: {count}</h2>
    </div>
  );
};

export default User;