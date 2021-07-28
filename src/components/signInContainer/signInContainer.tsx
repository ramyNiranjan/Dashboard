import { Box, Text } from 'grommet';
import React, { FunctionComponent } from 'react';
import { Google, Apple } from 'grommet-icons';

import AuthTag from '../atoms/authTag';

import * as S from './styled';

type SignInContainerProps = {};

const SignInContainer: FunctionComponent<SignInContainerProps> =
  () => {
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
        </Box>
      </S.Container>
    );
  };

export default SignInContainer;
