import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // Initially set to null. Set data using setBlogs later on
  const [blogs, setBlogs] = useState(null);

  // Fetch the data at the first render only -> No infinite loop
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">
      {/* Logical checking in React */}
      {/* Logical AND operator &&. If the first expression evaluates to false, the second expression will not be executed and checked */}
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" />
      )}
    </div>
  );
};

export default Home;
