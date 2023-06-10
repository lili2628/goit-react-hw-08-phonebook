import { Helmet } from 'react-helmet';
import LogInForm from 'components/LogInForm';

function Login() {
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <LogInForm />
        </div>
    );
}

export default Login;