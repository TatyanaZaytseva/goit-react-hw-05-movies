import styled from '@emotion/styled';

export const Container = styled.main`
  padding: 0px 8px;
`;

export const Form = styled.form`
  padding: 0px 16px;
`;

export const Input = styled.input`
  width: 400px;
  font-size: 15px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  outline: none;
  &:hover,
  &:focus {
    border-color: blue;
  }
  padding: 5px;
`;

export const Button = styled.button`
  margin-top: 10px;
  margin-left: 8px;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.6;

  border-radius: 4px;
  &:hover,
  &:focus {
    border-color: blue;
  }
  cursor: pointer;
  width: 100px;
`;
