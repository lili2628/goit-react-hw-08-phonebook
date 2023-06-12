import { Helmet } from 'react-helmet';
import  RegisterForm from 'components/RegisterForm';
import { MainContainer, BackgroundContainer } from 'components/App.styled';

function Register() {
    return (
        <BackgroundContainer>
            <MainContainer>
                <Helmet>
                    <title>Registration</title>
                </Helmet>
                <RegisterForm />
           </MainContainer>

        </BackgroundContainer>
        
    );
}

export default Register;