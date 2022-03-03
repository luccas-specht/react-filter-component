import classNames from 'classnames';

import styles from './line.module.scss';

type Props = {
  className?: string;
};

export const Line = ({ className }: Props) => (
  <hr className={classNames(styles['line'], className)} />
);
