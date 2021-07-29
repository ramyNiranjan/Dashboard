import {
  Box,
  Button,
  Form,
  FormField,
  Text,
  TextInput,
} from 'grommet';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { Google, Apple, Search, View, Hide } from 'grommet-icons';
import { useForm, SubmitHandler } from 'react-hook-form';

import AuthTag from '../atoms/authTag';
import InputWithLable from '../atoms/inputWithLable';

import * as S from './styled';

type SignInContainerProps = {};
interface FormState {
  Password?: string;
  email?: string;
  Name?: string;
}
const SignInContainer: FunctionComponent<SignInContainerProps> =
  () => {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm<FormState>();
    const onSubmit: SubmitHandler<FormState> = (data) =>
      console.log(data);
    return (
      <S.Container>
        <Box margin={{ bottom: 'medium' }}>
          <S.Headline>Sign In</S.Headline>
          <Text weight="bold" size="xl">
            Sign in to your account
          </Text>
        </Box>
        <Box direction="row">
          <AuthTag Icon={Google} title="Sign in with Google" />
          <AuthTag Icon={Apple} title="Sign in with Apple" />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputWithLable name="Name" register={register('Name')} />
            <InputWithLable
              name="Password"
              register={register('Password')}
              passowrd
            />
            <Box
              direction="row"
              justify="between"
              margin={{ top: 'medium' }}
            >
              <Button label="Cancel" />
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Update" primary />
            </Box>
          </Form>
        </Box>
      </S.Container>
    );
  };

export default SignInContainer;
