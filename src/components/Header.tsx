import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/auth/auth";
import type { RootState } from "../redux/store";
 
const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
 
  const handleLogout = () => {
    dispatch(logout());
    navigate('/login')
  };
 
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg">
  <div className="container mx-auto flex justify-between items-center">
    <h1 className="text-2xl font-bold text-white hover:text-blue-400">
      Your Dietplan
    </h1>
    <ul className="flex space-x-6 items-center">
      {!isLoggedIn ? (
        <li>
          <Link to="/login" className="hover:text-blue-400 font-medium">Login</Link>
        </li>
      ) : (
        <li>
          <button
            onClick={handleLogout}
            className="hover:text-blue-400 font-medium focus:outline-none"
          >
            Logout
          </button>
        </li>
      )}
    </ul>
  </div>
</nav>

  );
};
 
export default Header;
 
 