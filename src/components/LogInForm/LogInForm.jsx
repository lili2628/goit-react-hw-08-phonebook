import { useDispatch } from "react-redux";
import { logIn } from 'store/auth/operations';
import { Form, FormLabel, FormInput } from './LogInForm.styled';

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
            <FormLabel>
                Email
                <FormInput type="email" name="email" />
            </FormLabel>
            <FormLabel>
                Password
                <FormInput type="password" name="password" />
            </FormLabel>

            <button type="submit">Log In</button>
        </Form>
    )
};

export default LogInForm;