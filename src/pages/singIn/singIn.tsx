import { Box, Text } from 'grommet';
import { FunctionComponent } from 'react';

import * as S from './styled';
import SignInContainer from '../../components/signInContainer';

type SingInProps = {};

const SingIn: FunctionComponent<SingInProps> = () => {
  return (
    <S.Container
      background={{ color: 'brand' }}
      justify="between"
      direction="row"
    >
      <S.Left justify="center" align="center">
        <Text size="6xl" color="white">
          Dash
        </Text>
      </S.Left>
      <S.Right
        background={{ color: 'secondary' }}
        justify="center"
        align="center"
      >
        <SignInContainer />
      </S.Right>
    </S.Container>
  );
};

export default SingIn;
