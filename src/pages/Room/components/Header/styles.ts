import styled from 'styled-components';
import { breakpoints } from '../../../../styles';

export const Container = styled.div`
  flex: 0;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #3e4c61;
  }
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-direction: row;

  h3 {
    font-size: 24px;
    font-weight: bold;
  }

  @media (max-width: ${breakpoints.sm}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const Buttons = styled.div`
  button + button {
    margin-left: 10px;
  }
`;
