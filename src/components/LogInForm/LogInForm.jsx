import { useDispatch } from "react-redux";
import { logIn } from 'store/auth/operations';
import { Form, FormInput, LogInBtn} from './LogInForm.styled';
import LoginIcon from '@mui/icons-material/Login';

const LogInForm = () => {
    const dispatch = useDispatch();

    const onSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(logIn({
            email: form.elements.email.value,
            password: form.elements.password.value
        }));
        form.reset();
    };

    return (
        <Form onSubmit={onSubmit} autoComplete="off">
            
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
            <LogInBtn type="submit" variant="contained" color="primary" endIcon={<LoginIcon />}>Log In</LogInBtn>
        </Form>
    )
};

export default LogInForm;