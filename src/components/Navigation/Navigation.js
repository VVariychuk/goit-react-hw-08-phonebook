import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";


import { authSelectors } from '../../redux/auth';

const Navigation = ({isAuthenticated}) => (
    <nav>
        <NavLink to="/" exact>
            Home
        </NavLink>
        {isAuthenticated && 
        <NavLink to="/contacts">
            Contacts
        </NavLink>
        }
    </nav>
);

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),  
});

export default connect(mapStateToProps)(Navigation);

