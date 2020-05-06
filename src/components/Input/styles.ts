import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f2f2f2;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${props =>
    props.isFocused &&
    css`
      color: #3fb8fe;
      border-color: #3fb8fe;
    `}
  ${props =>
    props.isField &&
    css`
      color: #3fb8fe;
    `}
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #0f0f0f;
    &::placeholder {
      color: #9b9b9b;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
