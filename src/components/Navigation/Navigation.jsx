import useAuth from 'hooks';
import {Option, NavigationBox} from './Navigation.styled.jsx';

function Navigation() {
  const {isLoggedIn} = useAuth();

  return (
    <NavigationBox>
      {!isLoggedIn && (
        <Option to="/">
          Home
        </Option>
      )}

      {isLoggedIn && (
        <Option to="/contacts">
          Contacts
        </Option>
      )}
    </NavigationBox>
  );
}

export default Navigation;