import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #c4c4c4;
  border-radius: 30px;
  font-size: 8px;
  padding: 4px 8px;
  font-weight: bold;
  border: 0;
  transition: background-color 0.3s;
  &:hover {
    background: ${shade(0.2, '#3fb8fe')};
    color: #fff;
  }
`;
