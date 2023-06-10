import { Helmet } from 'react-helmet';
import  RegisterForm from 'components/RegisterForm';

function Register() {
    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <RegisterForm />
        </div>
    );
}

export default Register;