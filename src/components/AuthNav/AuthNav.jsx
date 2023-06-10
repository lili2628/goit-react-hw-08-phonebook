
import {OptionAuth} from './AuthNav.styled.jsx';

const AuthNav = () => {
  return (
    <div>
      <OptionAuth to="/register">
        Sign up
      </OptionAuth>
      <OptionAuth to="/login">
        Log In
      </OptionAuth>
    </div>
  );
};

export default AuthNav;