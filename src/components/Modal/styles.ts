import styled from 'styled-components';

interface ContainerProps {
  display: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: ${props => (props.display ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

export const Modal = styled.div`
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  animation-name: animatetop;
  animation-duration: 0.4s;
  top: 10%;
  @media (max-width: 1080px) {
    width: 60%;
  }
  @media (min-width: 1080px) {
    width: 60%;
  }
  @media (max-width: 720px) {
    width: 80%;
  }
  @keyframes animatetop {
    from {
      top: -300px;
      opacity: 0;
    }
    to {
      top: 10%;
      opacity: 1;
    }
  }
`;
