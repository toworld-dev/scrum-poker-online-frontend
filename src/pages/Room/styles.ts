import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  flex: 0;

  button + button {
    margin-left: 10px;
  }
`;
