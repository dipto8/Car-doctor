import { useContext } from "react";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

function Navbar() {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogout = ()=>{
    logOutUser()
    .then(()=>{})
    .catch(error=>{
      console.log(error)
    })

  }
  const navIteams = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Link to="/contactUs">Contact us</Link>
      </li>
      <li>
        <Link to="/">Services</Link>
      </li>
      
      {user?.email ? 
        <li>
          <button className="bg-red-500 text-lime-400" onClick={handleLogout}>Log out</button>
        </li>
       : 
        <li>
          <Link to="/login">Login</Link>
        </li>
      }
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm h-24 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navIteams}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navIteams}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-secondary">Appointment</button>
      </div>
    </div>
  );
}

export default Navbar;
