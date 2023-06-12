import useAuth from 'hooks';
import { MainContainer, BackgroundContainer, Title } from 'components/App.styled';



function Home () {

  const { isLoggedIn } = useAuth();

  return (
    <BackgroundContainer>
      <MainContainer>
         <Title>Welcome 👋</Title>
        {!isLoggedIn && ( <p> Please, Signup or Login to have access to the Phonebook! </p>)}
      </MainContainer>
    </BackgroundContainer> 
  );
}

export default Home;