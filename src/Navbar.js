import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        {/* Use Link component so that React can intercept the request sent to the server for content */}
        {/* By doing this, when we click on these links, the request will be sent to React and not the backend server. React will then look at what route is requested and serve the according content, without the need for the server to re-send the html file */}
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
