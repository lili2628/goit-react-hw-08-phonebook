import { useDispatch } from 'react-redux';
import  useAuth  from 'hooks';
import { LogoutContainer, LogoutName } from './UserMenu.styled.jsx';
import { logOut } from 'store/auth/operations';

function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <LogoutContainer>
      <LogoutName>Welcome, {user.name}</LogoutName>
      <button
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </button>
    </LogoutContainer>
  );
}

export default UserMenu;


