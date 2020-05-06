import styled from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  flex-direction: 'column';

  button + button {
    margin-left: 15px;
  }
`;

export const Content = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    width: 100%;
    text-align: center;
    h1 {
      margin-bottom: 15px;
      color: #656260;
    }
  }
`;
