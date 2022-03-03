import { Line, Subtitle } from '~/components';

import styles from './product-details.module.scss';

type Props = {
  productName: string;
};

export const ProductDetails = ({ productName }: Props) => (
  <aside className={styles['product-card-details']}>
    <Line className={styles['product-card-details__line']} />
    <Subtitle>{productName}</Subtitle>
  </aside>
);
