import { Helmet } from 'react-helmet';
import LogInForm from 'components/LogInForm';
import { MainContainer, BackgroundContainer } from 'components/App.styled';

function Login() {
    return (
        <BackgroundContainer>
            <MainContainer>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LogInForm />
        </MainContainer>
        </BackgroundContainer>
        
    );
}

export default Login;