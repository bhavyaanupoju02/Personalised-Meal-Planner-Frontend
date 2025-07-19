
import React from "react";
import { Link } from "react-router-dom";
import { userSideBarRouteList } from "../routes/routeList";
 
const Sidebar: React.FC<{ isOpen: boolean }> = ({ isOpen }) => { 
  const routeList = userSideBarRouteList;
 
 return (
  <div
    className={`fixed inset-y-0 left-0 bg-gray-900 p-4 transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-200 ease-in-out md:relative md:translate-x-0 md:w-64 shadow-lg`}
  >
    <nav className="space-y-4">
      {routeList.map((route) => (
        <Link
          to={route.link}
          key={route.link}
          className="block text-white font-medium hover:text-blue-400 transition"
        >
          {route.name}
        </Link>
      ))}
    </nav>
  </div>
);

};
 
export default Sidebar;
 
 