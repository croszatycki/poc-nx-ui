import React from 'react';
import {Container, Dot, Bar} from './styles';
import classNames from 'classnames';

export interface BuToggleProps {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export function BuToggle({
                           checked,
                           onChange,
                           className,
                           disabled,
                           children,
                           ...rest
                         }: React.PropsWithChildren<BuToggleProps>) {
  return (
    <Container className={classNames(className, { disabled })} {...rest}>
      <Dot
        checked={checked}
        aria-checked={checked}
        readOnly
        onChange={!disabled ? onChange : undefined}
      />
      <Bar />
      {children}
    </Container>
  );
}

export default BuToggle;
