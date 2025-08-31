import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FiHome, FiBarChart2, FiArchive, FiUsers, FiGift, FiUser } from "react-icons/fi"; 
import { FaFlask } from "react-icons/fa";
import  image  from "../logo.svg"



const Navbar = ({isOpen, toggleSidebar}) =>{
    const user = {
    name: "Sachin Kumar",
    email: "versac0987@gmail.com",
    avatar:  image
     };
    return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-6 h-6 text-gray-700" />}
      </button>

      {isOpen && (
        <div className="nav-links">
          <h2 className="logo">captialMind</h2>
          <NavLink  className={({ isActive }) => 
                `nav-link ${isActive ? "active" : ""}`
              } to="/">
            <FiHome className="icon" /> Home
          </NavLink>

          <NavLink  className={({ isActive }) => 
                `nav-link ${isActive ? "active" : ""}`
              } to="/portfolio">
            <FiBarChart2 className="icon" /> Portfolio
          </NavLink>

          <NavLink to="/experimentals" className="nav-link">
            <FaFlask className="icon" /> Experimentals
          </NavLink>

          <NavLink to="/archives" className="nav-link">
            <FiArchive className="icon" /> Stack Archives
          </NavLink>

          <NavLink to="/refer" className="nav-link">
            <FiUsers className="icon" /> Refer a Friend
          </NavLink>

          <NavLink to="/gift" className="nav-link">
            <FiGift className="icon" /> Gift a Subscription
          </NavLink>

          <NavLink to="/account" className="nav-link">
            <FiUser className="icon" /> Account
          </NavLink>
        </div>
      )}

       {isOpen && (
        <div className="user-info">
          <img src={user.avatar} alt="user avatar" className="avatar" />
          <div className="user-details">
            <span className="user-name">{user.name}</span>
            <span className="user-email">{user.email}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;