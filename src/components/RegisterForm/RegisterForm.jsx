import { useDispatch } from "react-redux";
import { register } from 'store/auth/operations';
import { Form, FormInput, SignUpBtn} from './RegisterForm.styled';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value
        }));
        form.reset();
    };

    return (
        <Form onSubmit={handleSubmit} autoComplete="off">
            
                <FormInput
                    type="text"
                    name="name"
                    label="Username"
                    variant="outlined"
                    color="accent"
                    />

                <FormInput
                    type="email"
                    name="email" 
                    variant="outlined"
                    label="Email"
                    color="accent"
                    />
                
                <FormInput
                    type="password"
                    name="password" 
                    label="Password"
                    variant="outlined"
                    color="accent"
            />
           <br></br> 
            <SignUpBtn type="submit" variant="contained" color="primary"  endIcon={<AppRegistrationIcon />}>Register</SignUpBtn>
        </Form>
    )
};

export default RegisterForm;