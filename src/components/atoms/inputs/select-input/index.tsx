import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  initialValue: string;
  onChange: (value: any) => void;
};

export const SelectInput = ({ children, initialValue, onChange }: Props) => (
  <select onChange={onChange}>{children}</select>
);
