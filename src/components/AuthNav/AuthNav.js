import { NavLink } from 'react-router-dom';

const AuthNav = () => (
    <div>
        <NavLink
            to="/register"
            exact
        >
            Sign Up
        </NavLink>
         <NavLink
            to="/login"
            exact
        >
            Sign In
        </NavLink>
  </div>  
);

export default AuthNav;