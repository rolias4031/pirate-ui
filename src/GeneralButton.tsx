import React from 'react';
import PropTypes from 'prop-types';
import { createLabel } from './utils';

interface GeneralButtonProps {
  styles?: {
    button?: string;
  };
  name: string;
  id: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => {};
  icon: JSX.Element;
  disabled: boolean;
}

export function GeneralButton({ styles, name, id, onClick, icon, disabled }: GeneralButtonProps) {
  function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    onClick(event);
  }
  return (
    <button
      id={id}
      onClick={clickHandler}
      type="button"
      name={name}
      className={styles?.button}
      disabled={disabled}
    >
      {!icon ? createLabel(name) : icon}
    </button>
  );
}