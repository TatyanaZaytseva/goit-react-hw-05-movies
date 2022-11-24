import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  padding: 16px;
  margin-bottom: 10px;

  > nav {
    display: flex;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 16px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-weight: 500;

  &.active {
    color: orangered;
  }
`;
