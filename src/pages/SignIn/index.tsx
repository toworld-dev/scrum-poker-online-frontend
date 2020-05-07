import React, { useRef, useCallback } from 'react';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

interface SignInFormData {
  name: string;
  roomId: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Required'),
          roomId: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn(data);
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao entrar na sala',
          description: 'Não foi possivel entrar na sala, tente novamente',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Enter Room</h1>

          <Input
            name="name"
            icon={FiUser}
            placeholder="Your name"
            type="text"
          />

          <Input
            name="roomId"
            icon={FiMail}
            placeholder="Room ID"
            type="text"
          />

          <Input
            name="password"
            icon={FiLock}
            placeholder="Room Password"
            type="password"
          />

          <Button type="submit">Enter</Button>
        </Form>

        <Link to="/create-room">Create room</Link>
      </Content>
    </Container>
  );
};

export default SignIn;
