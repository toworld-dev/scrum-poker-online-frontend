import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: stretch;
  background: ${props => props.theme.colors.background};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;

  form {
    width: 300px;
    text-align: center;
    h1 {
      margin-bottom: 24px;
      color: #656260;
    }
  }

  > a {
    color: #3fb8fe;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.3s;
    display: flex;
    align-items: center;
    svg {
      margin-right: 16px;
    }
    &:hover {
      color: ${shade(0.2, '#3fb8fe')};
    }
`;
