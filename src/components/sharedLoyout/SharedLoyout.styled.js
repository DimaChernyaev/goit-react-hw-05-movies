import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1240px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.header`
  background-color: black;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavigationLink = styled(NavLink)`
  position: relative;
  font-size: 20px;
  padding: 25px 0;
  font-weight: 700;
  color: #ffffff;
  transition: color 250ms linear;
  &:hover {
    color: #ffd723;
  }

  &:after {
    content: '';
    z-index: 100;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    width: 100%;
    height: 4px;
    background-color: #ffd723;
    transform: scale(0);
    transition: opacity 250ms linear, transform 250ms linear;
  }

  &.active:after {
    opacity: 1;
    transform: scale(1);
  }
`;
