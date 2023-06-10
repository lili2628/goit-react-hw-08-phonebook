import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { Header } from './AppBar.styled.jsx';
import  useAuth  from 'hooks';

export default function Appbar() {
  const { isLoggedIn } = useAuth();
  
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}