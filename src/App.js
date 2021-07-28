import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  // const title = "Welcome to the new blog";
  // const likes = 50;
  // const person = { name: "john", age: 32 }; // Cannot output Boolean and Object in JSX
  // const link = "http://www.google.com";

  return (
    <div className="App">
      <Navbar />

      <div className="content">
        <Home />

        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p> */}

        {/* <p>{10}</p>
        <p>{"Hello ninjas"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Google Search</a> */}
      </div>
    </div>
  );
}

// Always need to export the component function so it can be used in other files
export default App;
