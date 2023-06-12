import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const Form = styled.form`
   
`;


export const FormInput = styled(TextField)`
   &:not(:last-child) {
     margin-right: 15px;
     margin-bottom: 5px;
}
`;

export const LogInBtn = styled(Button)`
    border: 3px solid #D393C5;
    margin-top: 15px;
`;

