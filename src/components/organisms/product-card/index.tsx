import { Image } from '~/models';
import { ProductDetails } from '~/components';

import styles from './product-card.module.scss';

type Props = {
  name: string;
  images: Image[];
};

export const ProductCard = ({ name, images }: Props) => {
  const renderImages = () =>
    images.map(({ src, alt }, index) => (
      <img src={src} alt={alt} key={index} />
    ));

  return (
    <div className={styles['product-card']}>
      <div className={styles['product-card__images']}>{renderImages()}</div>
      <ProductDetails productName={name} />
    </div>
  );
};
