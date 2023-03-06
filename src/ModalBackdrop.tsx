import React, { ReactNode } from 'react';

interface ModalBackdropProps {
  children: ReactNode
}

export function ModalBackdrop({ children }: ModalBackdropProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 50,
      }}
    >
      {children}
    </div>
  );
}
