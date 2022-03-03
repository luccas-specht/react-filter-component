import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onChange: (value: any) => void;
};

export const SelectInput = ({ children, onChange }: Props) => (
  <select onChange={onChange}>{children}</select>
);
