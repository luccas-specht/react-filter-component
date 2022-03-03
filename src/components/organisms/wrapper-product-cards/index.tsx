import { Nodes } from '~/models';
import { ProductCard } from '~/components';

import styles from './wrapper-product-cards.module.scss';

type Props = {
  products: Nodes;
};

export const WrapperProductCards = ({ products }: Props) => (
  <div className={styles['wrapper-product-cards']}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
