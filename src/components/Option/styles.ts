import styled, { css } from 'styled-components';

interface ContainerProps {
  picked: boolean;
}

interface PositionProps {
  index?: number;
}

const handlePosition = (index: number | undefined): string => {
  switch (index) {
    default:
    case 0:
      return `top: -5px; left: -5px;`;

    case 1:
      return `top: -20px; left: 15px;`;

    case 2:
      return `top: -20px; right: 10px;`;

    case 3:
      return `top: -5px; right: -10px;`;

    case 5:
      return `top: 20px; right: -10px;`;

    case 6:
      return `bottom: 0px; right: -5px;`;

    case 7:
      return `bottom: -10px; right: 20px;`;

    case 8:
      return `bottom: -5px; left: 5px;`;

    case 9:
      return `bottom: 20px; left: -10px;`;
  }
};

export const Position = styled.div<PositionProps>`
  position: absolute;
  ${({ index }) =>
    css`
      ${handlePosition(index)}
    `};
`;

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

  position: relative;
`;
