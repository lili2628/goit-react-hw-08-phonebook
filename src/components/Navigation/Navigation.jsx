import useAuth from 'hooks';
import {Option} from './Navigation.styled.jsx';

function Navigation() {
  const {isLoggedIn} = useAuth();

  return (
    <nav>
      <Option to="/" >
        Home
      </Option>

      {isLoggedIn && (
        <Option to="/contacts">
          Contacts
        </Option>
      )}
    </nav>
  );
}

export default Navigation;