import React from 'react';

const labelRegex = /[A-Z]/;

function createLabel(nameVal: string, labelVal: string | undefined): string {
  if (labelVal) return labelVal;
  let newLabel = nameVal[0].toUpperCase();
  if (labelRegex.test(nameVal[1])) {
    for (let i = 1; i < nameVal.length; i += 1) {
      newLabel += nameVal[i].toLowerCase();
    }
  } else {
    for (let i = 1; i < nameVal.length; i += 1) {
      const match = labelRegex.test(nameVal[i]);
      if (match) {
        newLabel += ` ${nameVal[i]}`;
      } else {
        newLabel += nameVal[i];
      }
    }
  }
  return newLabel;
}

interface GeneralLabelProps {
  id: string;
  name: string;
  label?: string;
  styles: {
    label: string
  }
}

export function InputLabel({ id, name, label, styles }: GeneralLabelProps) {
  return (
    <label className={styles.label} htmlFor={id}>
      {createLabel(name, label)}
    </label>
  );
}