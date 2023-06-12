import styled from '@emotion/styled';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const Header = styled(AppBar)`
 border-bottom: 4px solid;
  border-image: linear-gradient(to right, #7362B9, #D393C5, #E7D1C7, #FAF2EC, #FCE574)
    20% 0%;
`;

export const Box = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    min-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 320px) {
        & {
        width: 320px;
    }}
    @media screen and (min-width: 768px) {
        & {
        width: 768px;
        padding-left: 32px;
        padding-right: 32px;
    }}
    @media screen and (min-width: 1200px) {
        & {
        width: 1200px;
        padding-left: 16px;
        padding-right: 16px;
    }}
`;
