import React from 'react';
import { cn } from '@utils/cn';
import { RegisterOptions, UseFormRegister } from 'react-hook-form';
import { Typography } from '../Typography';

export type TInputProps = {
  label: string;
  helper?: string;
  error?: string;
  id: string;
  className?: string;
  required?: boolean;
  name: string;
  register: UseFormRegister<any>;
  registerOptions?: RegisterOptions;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({
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
    <textarea
      className={cn(
        className,
        'border-2 border-black rounded-md p-2 w-full mt-1 mb-2 text-lg min-h-[150px]',
        error && 'border-red-600 border-2',
      )}
      id={id}
      {...rest}
      {...register(name, registerOptions)}
    />
    {error && (
      <Typography as="p" variant="body-regular" className="text-red-600">
        This field is required
      </Typography>
    )}
    {helper && (
      <Typography as="p" variant="body-regular">
        {helper}
      </Typography>
    )}
  </>
);
