import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const [name, setName] = useState("Mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // The useEffect hook is triggered whenever the UI is re-rendered.
  // This can be when the UI is rendered for the first time or any subsequent re-rendering due to state changes
  // Avoid updating state inside this hook otherwise it will run into an infinite loop
  useEffect(() => {
    console.log("usEffect run");
    console.log(name);
    // Empty dependency list -> run only once at the first render
    // Any stateful value in the list -> run when the states of those values change
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Luigi")}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
