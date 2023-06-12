import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';


export const LogoutContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const LogoutName = styled.span`
    font-weight: 700;
    margin-right: 20px;
    color: #fgtdhh;
    font-size: 18px;


    @media screen and (max-width: 500px) {
        display: none;
    }
`;




export const LogOutBtn = styled(IconButton)`
    color: custom;
`;



