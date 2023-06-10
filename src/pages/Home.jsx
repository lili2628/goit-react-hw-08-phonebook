import useAuth from 'hooks';

const Home = () => {

  const { isLoggedIn } = useAuth();

  return (
    <div>
      Welcome 👋
        
      {!isLoggedIn && (
        <p>
           Please, Signup or Login to have access to the
      Phonebook!
        </p>
       )
      }
    </div>
  );
};

export default Home;