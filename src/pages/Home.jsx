import useAuth from 'hooks';

function Home () {

  const { isLoggedIn } = useAuth();

  return (
    <div>
      <h1>Welcome 👋</h1>
        
      {!isLoggedIn && ( <p> Please, Signup or Login to have access to the Phonebook! </p>)}
    </div>
  );
}

export default Home;