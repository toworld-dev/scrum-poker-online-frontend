import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f2f2f2;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 2px solid #f2f2f2;
  color: #666360;
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
    props.isFilled &&
    css`
      color: #3fb8fe;
    `}
  input {
    color: #f4ede8;
    flex: 1;
    background: transparent;
    border: 0;
    color: #000;
    &::placeholder {
      color: #9b9b9b;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin-right: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
