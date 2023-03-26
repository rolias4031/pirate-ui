import React, { ReactNode } from 'react';

interface GeneralButtonProps {
  styles?: {
    button?: string;
  };
  name?: string;
  id?: string;
  onClick?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: ReactNode;
}

export function GeneralButton({
  styles,
  name,
  id,
  onClick,
  disabled,
  children,
}: GeneralButtonProps) {
  function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    if (onClick) {
      onClick(event);
    }
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
      {children}
    </button>
  );
}

GeneralButton.defaultProps = {
  disabled: false,
};
