import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { Header, Box } from './AppBar.styled.jsx';
import useAuth from 'hooks';


export default function Appbar() {
  const { isLoggedIn } = useAuth();
  
  return (
    <Header position="static">
      <Box>
        <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Box>
    </Header>
  );
}