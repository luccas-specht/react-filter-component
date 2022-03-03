import { ReactNode } from 'react';

import styles from './select-input.module.scss';

type Props = {
  id?: string;
  children: ReactNode;
  onChange: (value: any) => void;
};

export const SelectInput = ({
  id = 'select-input',
  children,
  onChange,
}: Props) => (
  <div className={styles['select-input']}>
    <select onChange={onChange} id={id}>
      {children}
    </select>
  </div>
);
