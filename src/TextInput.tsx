import React, { Dispatch, SetStateAction } from 'react';
import { InputLabel } from './InputLabel';

export interface TextInputStyles {
  div?: string;
  label?: string;
  input?: string;
}

export interface TextInputProps<T extends Record<string & keyof T, string>> {
  name: string;
  id: string;
  curState: string;
  raiseState: Dispatch<SetStateAction<T>>;
  label?: string;
  placeholder?: string;
  styles?: TextInputStyles;
  disabled?: boolean;
}

export function TextInput<T extends Record<string & keyof T, string>>({
  name,
  id,
  label,
  placeholder,
  styles,
  curState,
  raiseState,
  disabled,
}: TextInputProps<T>) {
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    raiseState((prevState: T) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  }

  return (
    <div className={styles?.div}>
      <InputLabel
        id={id}
        name={name}
        label={label}
        styles={{
          label: styles?.label,
        }}
      />
      <input
        onChange={changeHandler}
        className={`${styles?.input} focus:outline-none focus:shadow-outline`}
        type="text"
        id={id}
        name={name}
        value={curState}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}
