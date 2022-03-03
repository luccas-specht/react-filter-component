import { Nodes } from '~/models';
import { ProductCard } from '~/components';

import styles from './wrapper-product-cards.module.scss';

type Props = {
  products: Nodes;
};

export const WrapperProductCards = ({ products }: Props) => (
  <section className={styles['wrapper-product-cards']}>
    {products.map(({ id, name, images }) => (
      <ProductCard key={id} name={name} images={images} />
    ))}
  </section>
);
