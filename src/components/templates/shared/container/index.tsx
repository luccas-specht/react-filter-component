import { ReactNode } from 'react';
import classNames from 'classnames';

import styles from './container.module.scss';

type Props = {
  className?: string;
  children: ReactNode;
};

export const Container = ({ className = '', children }: Props) => (
  <div className={classNames(styles['container'], className)}>{children}</div>
);
