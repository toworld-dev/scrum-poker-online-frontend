import React, { useRef } from 'react';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
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
          <h1>Enter Room</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />

          <Input name="Room" icon={FiMail} placeholder="Room" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Acessar</Button>
        </Form>

        <Link to="/create-room">Create room</Link>
      </Content>
    </Container>
  );
};

export default SignIn;
