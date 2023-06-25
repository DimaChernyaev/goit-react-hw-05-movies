import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const SearchForm = styled(Form)`
  padding-top: 20px;
`;

export const Input = styled(Field)`
  padding: 5px 15px;
  border-color: #ffd723;
  border-radius: 8px;
  width: 400px;
  font-size: 18px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 20px;
  font-weight: 400;
  font-size: 16px;
  color: white;
  text-align: center;

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
