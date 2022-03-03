import { Categories, Nodes } from '~/models';
import { FilterComponent, WrapperProductCards } from '~/components';

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
  <section>
    <FilterComponent
      label={{
        text: 'Categories',
        htmlFor: 'categories',
      }}
      options={options}
      selectInput={{
        onChange: handleChangeCategory,
      }}
    />
    <WrapperProductCards products={products} />
  </section>
);
