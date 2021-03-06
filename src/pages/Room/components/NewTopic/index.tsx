import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { Input, Button, Modal } from '../../../../components';

import { Content, Buttons } from './styles';
import { ApplicationState } from '../../../../store';
import { set } from '../../../../store/ducks/modal/actions';
import { createTopic } from '../../../../store/ducks/room/actions';

const NewTopic: React.FC = () => {
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);
  const visible = useSelector<ApplicationState, boolean>(
    state => state.modal.status,
  );

  return (
    <Modal display={visible}>
      <Content>
        <Form
          ref={formRef}
          onSubmit={values => {
            const topicName = values?.topic;

            if (topicName) {
              dispatch(createTopic(values.topic));
              dispatch(set(false));
            }
          }}
        >
          <h1>New topic</h1>

          <Input name="topic" placeholder="Topic" />

          <Buttons>
            <Button type="button" onClick={() => dispatch(set(false))}>
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
