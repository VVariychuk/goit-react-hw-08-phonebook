import { connect } from 'react-redux';

import {authSelectors} from '../redux/auth';

const HomeView = ({ isAuthenticated }) => (
    <div>
      {isAuthenticated
        ? <h1>Please go to the contacts page</h1>
        : <h1>Please Sign In or Sign Up</h1>
      }
   </div> 
);

const mapStateToProps = state => ({
isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(HomeView);