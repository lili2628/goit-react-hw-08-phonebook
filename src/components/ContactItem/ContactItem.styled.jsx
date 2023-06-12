import styled from '@emotion/styled';
import IconButton from '@mui/material/IconButton';


export const ListItem = styled.li`
display: flex;
justify-content: space-between;

border: 1px dashed #7362B9;
padding-left: 15px;
padding-right: 15px;

&:not(:last-child) {
     margin-bottom: 15px;
}
`;

export const InfoContainer = styled.div`
display: flex;
margin: 0;
`;

export const InfoItemContainer = styled.div`
    min-width: 100px;
    position: relative;
`;

export const Data = styled.p`
    display: block;
    margin: 0;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);

    width: 100%;
`;

export const DeleteBtn = styled(IconButton)`
    
`;