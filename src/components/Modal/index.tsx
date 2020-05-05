import React from 'react';

import { Container, Modal as ModalStyle } from './styles';

interface ModalProps {
  display?: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, display = false }) => {
  return (
    <Container display={display}>
      <ModalStyle>{children}</ModalStyle>
    </Container>
  );
};

export default Modal;
