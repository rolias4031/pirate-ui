import React, { Dispatch, SetStateAction } from 'react';
import cn from 'classnames'

export interface TextInputProps<T extends Record<string & keyof T, string>> {
  name: string;
  id?: string;
  curInput: string;
  raiseInput: Dispatch<SetStateAction<T>>;
  placeholder?: string;
  styles?: {
    input?: string;
    invalid?: string;
  };
  isDisabled?: boolean;
  isInvalid?: boolean;
}

export function TextInput<T extends Record<string & keyof T, string>>({
  name,
  id,
  placeholder,
  styles,
  curInput,
  raiseInput,
  isDisabled,
  isInvalid,
}: TextInputProps<T>) {
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    raiseInput((prevState: T) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  }

  return (
    <input
      onChange={changeHandler}
      className={cn(styles?.input, {[`${styles?.invalid}`]: isInvalid})}
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
