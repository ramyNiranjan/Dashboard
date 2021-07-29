import { FunctionComponent, useState } from 'react';
import { Box, Button } from 'grommet';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Hide, View } from 'grommet-icons';

import * as S from './styled';

type InputWithLableProps = {
  register: UseFormRegisterReturn;
  name: string;
  passowrd?: boolean;
  error?: string;
};

const InputWithLable: FunctionComponent<InputWithLableProps> = ({
  register,
  name,
  passowrd = false,
  error,
}) => {
  const [reveal, setReveal] = useState(false);
  return (
    <Box>
      <S.Label htmlFor={name}>{name}</S.Label>
      <Box direction="row" align="center" round="small" border>
        <S.Input
          plain
          name={name}
          id={name}
          type={!reveal ? 'text' : 'password'}
          {...register}
        />
        {passowrd && (
          <Button
            icon={
              reveal ? <View size="medium" /> : <Hide size="medium" />
            }
            onClick={() => setReveal(!reveal)}
          />
        )}
      </Box>
      {error && <S.Error>{error}</S.Error>}
    </Box>
  );
};

export default InputWithLable;
