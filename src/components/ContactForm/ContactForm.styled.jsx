import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

export const Form = styled.form`
    width: 100%;
    border: 2px solid #E7D1C7;
    border-radius: 5px;
    box-shadow: 1px 1px 1px #D393C5;

    padding-top: 20px;
    padding-bottom: 20px;
`;

export const FormData = styled.div`
    display: flex;
    justify-content: space-around;
    padding-bottom: 20px;
`;


export const FormInput = styled(TextField)`
    font-family: inherit;
       
    width: 250px;
    padding: 6px;
    margin: 0;
    
    font-size: 12px;
    
    border: 1px solid #D393C5;
    border-radius: 4px;
`;

export const AddBtn = styled(Button)`
   display: block;
   width: 135px;
   margin-left: auto;
   margin-right: auto;
   padding: 6px 12px;
`;