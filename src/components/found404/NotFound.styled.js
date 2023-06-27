import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const ButtonBackHome = styled(Link)`
  margin-top: 20px;
  display: inline-flex;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-weight: 400;
  font-size: 16px;
  color: white;
  width: 300px;

  background-color: black;
  border: 2px solid #ffd723;
  border-radius: 8px;
  cursor: pointer;

  transition: color 250ms linear, border-color 250ms linear,
    box-shadow 250ms linear, background-color 250ms linear;

  &:hover {
    color: #ffd723;
    background-color: black;
    border-color: black;
    box-shadow: 1px -1px 2px rgba(78, 78, 78, 0.8);
  }
`;

export const WrapperNonFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: white;
`;

export const NonFound = styled.p`
  font-size: 120px;
  color: black;
`;

export const NonFoundText = styled.p`
  font-size: 24px;
  color: black;
`;
