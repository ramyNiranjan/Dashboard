import React, { FunctionComponent, RefObject, useState } from 'react';
import { Box, Button, TextInput } from 'grommet';

import * as S from './styled';
import { Hide, View } from 'grommet-icons';
import { UseFormRegisterReturn } from 'react-hook-form';

type InputWithLableProps = {
  register: UseFormRegisterReturn;
  name: string;
  passowrd?: boolean;
};

const InputWithLable: FunctionComponent<InputWithLableProps> = ({
  register,
  name,
  passowrd = false,
}) => {
  const [reveal, setReveal] = useState(false);
  return (
    <Box>
      <label htmlFor={name}>{name}</label>
      <Box direction="row" align="center" round="small" border>
        <TextInput
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
      <span>Error</span>
    </Box>
  );
};

export default InputWithLable;
