import { Node } from '~/models';
import { Line, Subtitle } from '~/components';

import styles from './product-card.module.scss';

type Props = {
  product: Node;
};

export const ProductCard = ({ product }: Props) => {
  const { name, images } = product;

  const renderImages = () =>
    images.map(({ src, alt }, index) => (
      <img src={src} alt={alt} key={index} />
    ));

  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__images']}>{renderImages()}</div>
      <Line className={styles['product-card__line']} />
      <Subtitle>{name}</Subtitle>
    </div>
  );
};
