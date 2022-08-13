import React from 'react';
import { Input, InputProps } from '../Input';
import { Control, Controller, FieldError } from 'react-hook-form';
import { Error } from './style';
type Props = InputProps & {
	control: Control<any>;
	name: string;
	error?: FieldError;
};

export function ControlledInput({ control, name, error, ...rest }: Props) {
	return (
		<>
			<Controller
				control={control}
				name={name}
				render={({ field: { onChange, value } }) => (
					<Input onChangeText={onChange} value={value} {...rest} />
				)}
			/>
      {
        error &&(
          <Error>{error.message}</Error>
        )
      }
		</>
	);
}
