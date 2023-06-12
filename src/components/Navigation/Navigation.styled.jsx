import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';


export const Option = styled(NavLink)`
  
  display: inline-block;
  text-decoration: none;
  padding: 20px 0;
  font-weight: 700;
  color: #FAF2EC;
  font-size: 20px;
  background-color: #7362B9;

  &:not(:last-child) {
  padding-right: 30px;
  }

  &.active {
    color: #FCE574;
   
  }

  &:hover,
  &:focuds {
    color: #FCE574;
 
  }

`;

export const NavigationBox = styled(BottomNavigation)`

`;