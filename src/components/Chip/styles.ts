import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: ${props => props.theme.colors.primary};
  border-radius: 30px;
  font-size: 8px;
  padding: 4px 8px;
  font-weight: bold;
  border: 0;
  transition: background-color 0.3s;
  &:hover {
    background: ${props => props.theme.colors.secundary};
    color: ${props => shade('0.3', props.theme.colors.text)};
  }
`;
