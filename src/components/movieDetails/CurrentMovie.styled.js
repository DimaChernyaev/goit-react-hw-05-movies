import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 40px;
`;

export const Wrapper = styled.section`
  margin-top: 20px;
  display: flex;
  gap: 30px;
`;

export const ButtonBack = styled(Link)`
  display: inline-flex;
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

export const TitleFilm = styled.h2`
  font-size: 42px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
`;

export const TitleText = styled.h3`
  font-size: 28px;
  margin-bottom: 10px;
`;

