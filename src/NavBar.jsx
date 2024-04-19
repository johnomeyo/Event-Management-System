import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="nav-bar">
        <Link to="/">Sign Up</Link>
        <Link to="events">Events</Link>
        <Link to="create">Create</Link>
        <Link to="details">Details</Link>
      </nav>
    </div>
  );
}
export default NavBar;
