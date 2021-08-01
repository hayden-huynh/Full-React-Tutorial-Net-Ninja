import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    // Trigger the fetch after 1000 miliseconds to simulate loading
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false); // Discard "Loading..." when data is done being retrieved
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {/* Only when the left expression is true will the right expression be executed (component be rendered) */}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
