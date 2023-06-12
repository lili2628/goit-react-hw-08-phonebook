
import styled from '@emotion/styled';
import { Button, TextField  } from '@mui/material';

export const Form = styled.form`
    display: flax;
    flex-wrap: wrap;
   
`;



export const FormInput = styled(TextField)`
      &:not(:last-child) {
     margin-right: 15px;
     margin-bottom: 5px;
}
`;

export const SignUpBtn = styled(Button)`
   border: 3px solid #D393C5;
   padding: 6px 12px;
   margin-top: 15px;
   
`;

