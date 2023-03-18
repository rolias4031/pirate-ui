import React from 'react';
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
  };
  isDisabled?: boolean;
  isInvalid?: boolean;
}

export function TextInput({
  name,
  id,
  placeholder,
  styles,
  curInput,
  raiseInput,
  isDisabled,
  isInvalid,
}: TextInputProps) {

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    raiseInput({ name: event.target.name, input: event.target.value });
  }

  return (
    <input
      onChange={changeHandler}
      className={cn(styles?.input, {
        [`${styles?.invalid}`]: isInvalid
      })}
      type="text"
      id={id}
      name={name}
      value={curInput}
      placeholder={placeholder}
      disabled={isDisabled}
      autoComplete="off"
    />
  );
}
