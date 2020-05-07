import React, { useRef, useCallback } from 'react';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

interface SignUpFormData {
  name: string;
  roomName: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Required'),
          roomName: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        });

        await schema.validate(data, { abortEarly: false });

        const response = await api.post(`/room`, data);

        const account = {
          ...response.data,
          roomId: response.data.id,
          user: data.name,
        };

        localStorage.setItem(
          '@ScrumPokerOnline:account',
          JSON.stringify(account),
        );
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na criação de sala',
          description: 'Não foi possivel criar uma sala, tente novamente',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Create Room</h1>

          <Input
            name="name"
            icon={FiUser}
            placeholder="Your name"
            type="text"
          />

          <Input
            name="roomName"
            icon={FiMail}
            placeholder="Room name"
            type="text"
          />

          <Input
            name="password"
            icon={FiLock}
            placeholder="Room Password"
            type="password"
          />

          <Button type="submit">Access</Button>
        </Form>

        <Link to="/enter-room">Enter room</Link>
      </Content>
    </Container>
  );
};

export default SignUp;
