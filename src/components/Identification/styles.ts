import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex: 1;
  color: #3e4c61;

  div & div {
    margin-bottom: 5px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  h1 + h2 {
    padding-left: 5px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 14px;
  }
`;

export const Description = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  h3 {
    font-size: 26px;
    font-weight: bold;
  }

  button {
    background: #c4c4c4;
    border-radius: 30px;
    font-size: 8px;
    padding: 4px 8px;
    font-weight: bold;
    margin-left: 10px;
    border: 0;
    transition: background-color 0.3s;
    &:hover {
      background: ${shade(0.2, '#3fb8fe')};
      color: #fff;
    }
  }
`;
