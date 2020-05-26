import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  height: 100vh;
  display: flex;
  align-items: stretch;
  flex-direction: column;
  background: ${props => props.theme.colors.background};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
