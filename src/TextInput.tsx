import React, { forwardRef } from 'react';
import cn from 'classnames';

export interface RaiseInputArgs {
  name: string;
  input: string;
}

export interface TextInputProps {
  name: string;
  id?: string;
  curInput: string;
  raiseInput: (payload: RaiseInputArgs) => void;
  placeholder?: string;
  styles?: {
    input?: string;
    invalid?: string;
    disabled?: string;
  };
  isDisabled?: boolean;
  isInvalid?: boolean;
  onClick?: () => void
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({
  name,
  id,
  placeholder,
  styles,
  curInput,
  raiseInput,
  isDisabled,
  isInvalid,
  onClick,
}: TextInputProps, ref) => {

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    raiseInput({ name: event.target.name, input: event.target.value });
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
      value={curInput}
      placeholder={placeholder}
      disabled={isDisabled}
      autoComplete="off"
    />
  );
})
