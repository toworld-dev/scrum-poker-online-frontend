import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Modal from '../../../../components/Modal';

import { Content, Buttons } from './styles';

interface NewTopicProps {
  visible: boolean;
  onClose: () => void;
}

const NewTopic: React.FC<NewTopicProps> = ({ visible, onClose }) => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Modal display={visible}>
      <Content>
        <Form
          ref={formRef}
          onSubmit={() => {
            console.log('aq');
          }}
        >
          <h1>New topic</h1>

          <Input name="topic" placeholder="Topic" />

          <Buttons>
            <Button type="button" onClick={onClose}>
              Close
            </Button>
            <Button type="submit">Save</Button>
          </Buttons>
        </Form>
      </Content>
    </Modal>
  );
};

export default NewTopic;
