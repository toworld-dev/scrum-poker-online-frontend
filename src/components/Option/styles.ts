import styled, { css } from 'styled-components';

interface ContainerProps {
  picked: boolean;
}

export const Container = styled.button<ContainerProps>`
  background: linear-gradient(
    180deg,
    rgba(63, 184, 254, 0.25) 72.92%,
    rgba(63, 184, 254, 0.25) 100%
  );
  border-radius: 30px;
  width: 74px;
  height: 74px;
  font-size: 24px;
  color: #3e4c61;
  font-weight: bold;
  border: 0;

  ${props =>
    props.picked &&
    css`
      background: linear-gradient(
        180deg,
        rgba(39, 159, 51, 0.25) 72.92%,
        rgba(91, 168, 31, 0.25) 100%
      );
      color: #279f33;
    `}
`;
