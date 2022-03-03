import classNames from 'classnames';
import { ReactNode } from 'react';

import styles from './subtitle.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Subtitle = ({ children, className = '' }: Props) => (
  <h3 className={classNames(styles['subtitle'], className)}>{children}</h3>
);
