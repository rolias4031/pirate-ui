import React from 'react';
import { InputLabel } from './InputLabel';
import { TextInput, TextInputProps } from './TextInput';

export interface TextInputWithLabelProps extends TextInputProps {
  id: string;
  label?: string;
  styles?: {
    div?: string;
    label?: string;
    input?: string;
    invalid?: string;
  };
}

export function TextInputWithLabel({
  name,
  id,
  label,
  placeholder,
  styles,
  value,
  onChange,
  isDisabled,
  isInvalid,
  isReadOnly
}: TextInputWithLabelProps) {
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
        value={value}
        onChange={onChange}
        styles={{
          input: styles?.input,
          invalid: styles?.invalid,
        }}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        isReadOnly={isReadOnly}
      />
    </div>
  );
}
