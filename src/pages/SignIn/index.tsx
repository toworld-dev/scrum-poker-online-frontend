import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { ISignInRequest } from '../../types/auth/IAuthRequest';
import * as AuthActions from '../../store/ducks/auth/actions';
import getValidationErrors from '../../utils/getValidationErrors';
import { Input, Button } from '../../components';

import { Container, Content } from './styles';

const SignIn: React.FC = () => {
  const params = useParams<{ id: string | undefined }>();
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (values: ISignInRequest) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Required'),
          roomId: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        });

        await schema.validate(values, { abortEarly: false });

        dispatch(AuthActions.signInRequest(values));
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }
    },
    [dispatch],
  );

  return (
    <Container>
      <Content>
        <Form
          initialData={{ roomId: params?.id }}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <h1>Enter Room</h1>

          <Input
            name="username"
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
