
import {NavigationBox, OptionAuth} from './AuthNav.styled.jsx';

const AuthNav = () => {
  return (
    <NavigationBox>
      <OptionAuth to="/register">
        Sign Up
      </OptionAuth>
      <OptionAuth to="/login">
        Log In
      </OptionAuth>
    </NavigationBox>
  );
};

export default AuthNav;