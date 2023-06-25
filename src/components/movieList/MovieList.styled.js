import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const Item = styled.li`
  background: rgba(255, 255, 255, 0.7);
  width: 100%;
  border: none;
  border-radius: 8px;
  owerflow: hidden;
  transition: box-shadow 250ms linear;

  &:hover {
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.7);
  }
`;

export const ItemLink = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 8px;
  display: flex;
  gap: 20px;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MovieTitle = styled.h2`
  font-size: 18px;
  color: black;
`;

export const Text = styled.p`
  color: black;
  font-size: 16px;
`;

export const Image = styled.img`
  border-radius: 8px;
`;
