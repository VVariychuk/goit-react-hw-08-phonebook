import { connect } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import { authSelectors } from '../../redux/auth';

const AppBar = ({isAuthenticated}) => (
    <header>
        <Navigation />
        {isAuthenticated ? <UserMenu/> : <AuthNav/>}
    </header>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);