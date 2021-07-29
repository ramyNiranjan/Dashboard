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
import { yupResolver } from '@hookform/resolvers/yup';

import AuthTag from '../atoms/authTag';
import InputWithLable from '../atoms/inputWithLable';
import { schemaSignIn } from '../../utilities/yupValidation';

import * as S from './styled';

type SignInContainerProps = {};
interface FormState {
  Password?: string;
  Email?: string;
  Name?: string;
}
const SignInContainer: FunctionComponent<SignInContainerProps> =
  () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormState>({
      resolver: yupResolver(schemaSignIn),
    });
    const onSubmit: SubmitHandler<FormState> = (data) =>
      console.log(data);
    console.log(errors);
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
            <InputWithLable
              name="Email"
              register={register('Email')}
              error={errors?.Email?.message}
            />
            <InputWithLable
              name="Password"
              register={register('Password')}
              error={errors?.Password?.message}
              passowrd
            />
            <Button type="submit" label="Update" primary />
          </Form>
        </Box>
      </S.Container>
    );
  };

export default SignInContainer;
