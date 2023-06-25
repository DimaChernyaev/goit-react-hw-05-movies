import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  border: 2px solid #ffd723;
  border-radius: 8px;
  background-color: black;
`;

export const Link = styled(NavLink)`
  color: white;
  font-size: 20px;
  padding: 10px;
  text-align: center;

  &:hover {
    color: #ffd723;
  }

  &.active {
    color: #ffd723;
  }
`;
