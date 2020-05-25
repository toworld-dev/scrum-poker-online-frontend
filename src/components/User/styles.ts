import styled from 'styled-components';

interface ContainerProps {
  size: string;
  color?: string | undefined;
}

const handleSize = (size: string): string => {
  switch (size) {
    case 'small':
      return 'width: 23px; height: 23px; font-size: 12px';
    case 'large':
      return 'width: 74px; height: 74px;';
    case 'medium':
    default:
      return 'width: 56px; height: 56px;';
  }
};

export const Container = styled.button<ContainerProps>`
  border: 0;
  background: ${(props: ContainerProps) =>
    props.color ? props.color : '#8f969c'};
  font-size: 24px;
  border-radius: 50%;
  color: #fff;
  font-weight: bold;
  text-transform: capitalize;
  ${({ size }) => handleSize(size)};
`;
