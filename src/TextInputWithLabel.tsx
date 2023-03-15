import React, { Dispatch, SetStateAction } from 'react';
import { InputLabel } from './InputLabel';
import { TextInputProps } from './TextInput';

export interface TextInputWithLabelProps<
  T extends Record<string & keyof T, string>,
> extends TextInputProps<T> {
  id: string;
  label?: string;
  styles?: {
    div?: string;
    label?: string;
    input?: string;
    invalid?: string;
  };
}

export function TextInput<T extends Record<string & keyof T, string>>({
  name,
  id,
  label,
  placeholder,
  styles,
  curInput,
  raiseInput,
  isDisabled,
  isInvalid,
}: TextInputWithLabelProps<T>) {
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    raiseInput((prevState: T) => ({
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
      <TextInput
        name={name}
        id={id}
        placeholder={placeholder}
        curInput={curInput}
        raiseInput={raiseInput}
        styles={{
          div: styles?.div,
          input: styles?.input,
          invalid: styles?.invalid,
        }}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
      />
    </div>
  );
}
