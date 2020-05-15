import React, { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { ISignUpRequest } from '../../types/auth/IAuthRequest';
import * as AuthActions from '../../store/ducks/auth/actions';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (values: ISignUpRequest) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Required'),
          name: Yup.string().required('Required'),
          password: Yup.string().required('Required'),
        });

        await schema.validate(values, { abortEarly: false });

        dispatch(AuthActions.signUpRequest(values));
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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Create Room</h1>

          <Input
            name="username"
            icon={FiUser}
            placeholder="Your name"
            type="text"
          />

          <Input
            name="name"
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
