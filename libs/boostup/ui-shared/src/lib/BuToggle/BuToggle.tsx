import React from 'react';
import {Bar, Container, Dot} from './BuToggle.style'
import classNames from 'classnames';

export interface BuToggleProps {
  className?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?(e: React.ChangeEvent<HTMLInputElement>): void;
}

export const BuToggle: React.FC<BuToggleProps> = ({
                                                   checked,
                                                   onChange,
                                                   className,
                                                   disabled,
                                                   children,
                                                 }) => (
  <Container className={classNames(className, { disabled })}>
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

export default BuToggle;
