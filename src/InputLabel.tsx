import React from 'react';
import { createLabel } from './utils'

export interface InputLabelProps {
  id: string;
  name: string;
  label?: string;
  styles?: {
    label?: string
  }
}

export function InputLabel({ id, name, label, styles }: InputLabelProps) {
  return (
    <label className={styles?.label} htmlFor={id}>
      {createLabel(name, label)}
    </label>
  );
}