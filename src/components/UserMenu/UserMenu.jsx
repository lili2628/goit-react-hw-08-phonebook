import { useDispatch } from 'react-redux';
import  useAuth  from 'hooks';
import { LogoutContainer, LogoutName, LogOutBtn } from './UserMenu.styled.jsx';
import { logOut } from 'store/auth/operations';
import LogoutIcon from '@mui/icons-material/Logout';

function UserMenu() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <LogoutContainer>
      <LogoutName>Welcome, {user.name}</LogoutName>
      <LogOutBtn
        type="button"
        color="accent"
        onClick={() => dispatch(logOut())}>
        <LogoutIcon />
      </LogOutBtn>
    </LogoutContainer>
  );
}

export default UserMenu;


