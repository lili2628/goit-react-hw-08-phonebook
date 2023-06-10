import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const Option = styled(NavLink)`
 display: inline-block;
  padding: 20px 0;
  font-weight: 700;
  color: #hjyt678;
  font-size: 20px;

  &:not(:last-child) {
  margin-right: 30px;
  }

  &.active {
    color: #fa0093;
    outline: 1px solid #fa0093;;
    box-shadow: 0px 0px 0px 1px #fa0093;
  }

  &:hover,
  &:focuds {
    color: #fa0093;
    outline: 1px solid #fa0093;;
    box-shadow: 0px 0px 0px 1px #fa0093;
  }

`;