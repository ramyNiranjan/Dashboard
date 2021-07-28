import { Text } from 'grommet';
import React, { FunctionComponent } from 'react';
import * as S from './styled';

type AuthTagProps = {
  Icon: any;
  title: string;
};

const AuthTag: FunctionComponent<AuthTagProps> = ({
  Icon,
  title,
}) => {
  return (
    <S.Container
      direction="row"
      background={{ color: 'white' }}
      align="center"
      round
    >
      <Icon color="plain" />
      <Text margin={{ left: 'small' }} color="secondaryText">
        {title}
      </Text>
    </S.Container>
  );
};

export default AuthTag;
