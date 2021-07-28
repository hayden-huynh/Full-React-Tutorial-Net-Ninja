import { useState } from "react";

const Home = () => {
  // useState returns an array of the current value and the function to set a new value
  // Here we are using array destructuring to retrieve the value and the function reference
  const [name, setName] = useState("Mario");
  const [age, setAge] = useState(25);

  const handleClick = (e) => {
    setName("Luigi");
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
