import React, { forwardRef } from 'react';
import cn from 'classnames';

export interface RaiseInputArgs {
  name: string;
  input: string;
}

export interface TextInputProps {
  name: string;
  id?: string;
  value: string;
  onChange: (payload: RaiseInputArgs) => void;
  placeholder?: string;
  styles?: {
    input?: string;
    invalid?: string;
    disabled?: string;
  };
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  onClick?: () => void;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      name,
      id,
      placeholder,
      styles,
      value,
      onChange,
      isDisabled,
      isInvalid,
      isReadOnly,
      onClick,
    }: TextInputProps,
    ref,
  ) => {
    function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
      onChange({ name: event.target.name, input: event.target.value });
    }

    return (
      <input
        onClick={onClick}
        onChange={changeHandler}
        className={cn(styles?.input, {
          [`${styles?.invalid}`]: isInvalid,
          [`${styles?.disabled}`]: true,
        })}
        ref={ref}
        type="text"
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        readOnly={isReadOnly}
        autoComplete="off"
      />
    );
  },
);
