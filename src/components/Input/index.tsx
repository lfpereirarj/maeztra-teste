import React from 'react';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ type, ...props }, forwardedRef) => {
      return (
        <input
          className=""
          type={type}
          {...props}
          ref={forwardedRef}
        />
      );
    }
  );