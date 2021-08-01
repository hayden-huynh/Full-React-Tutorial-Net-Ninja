import { useParams } from "react-router-dom";

const BlogDetails = () => {
  // Extract the parameter(s) passed to the route
  const { id } = useParams;

  return (
    <div className="blog-details">
      <h2>Blog Details</h2>
    </div>
  );
};

export default BlogDetails;
