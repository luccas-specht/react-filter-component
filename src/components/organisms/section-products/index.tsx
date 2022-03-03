import { Categories, Nodes } from '~/models';
import { FilterComponent, WrapperProductCards } from '~/components';

import styles from './section-products.module.scss';

type Props = {
  products: Nodes;
  options: Categories;
  handleChangeCategory: (e: any) => void;
};

export const SectionProducts = ({
  options,
  products,
  handleChangeCategory,
}: Props) => (
  <div className={styles['section-products']}>
    <FilterComponent
      options={options}
      selectInput={{
        onChange: handleChangeCategory,
      }}
    />
    <WrapperProductCards products={products} />
  </div>
);
