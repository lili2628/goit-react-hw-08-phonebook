
import {OptionAuth} from './AuthNav.styled.jsx';

const AuthNav = () => (
  <div>
    <OptionAuth
      to="/register"
      exact
    >
      Sign up
    </OptionAuth>
    <OptionAuth
      to="/login"
      exact
    >
      Log In
    </OptionAuth>
  </div>
);

export default AuthNav;