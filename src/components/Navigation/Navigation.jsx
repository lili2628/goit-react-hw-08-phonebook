import useAuth from 'hooks';
import {Option} from './Navigation.styled.jsx';

function Navigation() {
  const {isLoggedIn} = useAuth();

  return (
    <nav>
      <Option to="/" exact>
        Home
      </Option>

      {isLoggedIn && (
        <Option
          to="/contacts"
          exact
        >
          Contacts
        </Option>
      )}
    </nav>
  );
}

export default Navigation;