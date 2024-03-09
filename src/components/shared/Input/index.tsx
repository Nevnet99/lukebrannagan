import React from 'react';
import { cn } from '@utils/cn';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Typography } from '../Typography';

export type TInputProps = {
  label: string;
  helper?: string;
  error?: boolean;
  id: string;
  className?: string;
  required?: boolean;
  name: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  helper,
  error,
  id,
  className,
  required = false,
  register,
  name,
  registerOptions,
  ...rest
}: TInputProps) => (
  <>
    <Typography as="label" variant="body-regular" htmlFor={id}>
      {label}{' '}
      <Typography as="span" className="text-red-600">
        {required ? '*' : ''}
      </Typography>
    </Typography>
    <input
      className={cn(
        className,
        'border-2 border-black rounded-md p-2 w-full mt-1 mb-2 text-lg',
        error && 'border-red-600 border-2',
      )}
      id={id}
      {...rest}
      {...register(name, registerOptions)}
    />
    {helper && (
      <Typography as="p" variant="body-regular">
        {helper}
      </Typography>
    )}
  </>
);
