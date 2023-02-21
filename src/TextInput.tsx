import React, { Dispatch, SetStateAction } from 'react';
import { InputLabel } from './InputLabel';

interface PrevState {
  [key: string]: string;
}

interface TextInputStyles {
  div: string;
  label: string;
  input: string;
}

export interface TextInputProps {
  name: string;
  id: string;
  curState: string;
  raiseState: Dispatch<SetStateAction<PrevState>>;
  label?: string;
  placeholder?: string;
  styles: TextInputStyles;
  disabled?: boolean;
}

export function TextInput({
  name,
  id,
  label,
  placeholder,
  styles = { div: '', label: '', input: '' },
  curState,
  raiseState,
  disabled,
}: TextInputProps) {
  function changeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();
    raiseState((prevState: PrevState) => ({
      ...prevState,
      [name]: event.target.value,
    }));
  }

  return (
    <div className={styles.div}>
      <InputLabel
        id={id}
        name={name}
        label={label}
        styles={{
          label: styles.label,
        }}
      />
      <input
        onChange={changeHandler}
        className={`${styles.input} focus:outline-none focus:shadow-outline`}
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
