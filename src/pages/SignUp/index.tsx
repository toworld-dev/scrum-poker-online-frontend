import React, { useRef } from 'react';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  return (
    <Container>
      <Content>
        <Form
          ref={formRef}
          onSubmit={() => {
            history.push('/room/123');
          }}
        >
          <h1>Create Room</h1>

          <Input name="name" icon={FiUser} placeholder="Name" />

          <Input name="room" icon={FiMail} placeholder="Room" />

          <Input name="room-name" icon={FiMail} placeholder="Room name" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Room Password"
          />

          <Button type="submit">Acessar</Button>
        </Form>

        <Link to="/enter-room">Enter room</Link>
      </Content>
    </Container>
  );
};

export default SignUp;
