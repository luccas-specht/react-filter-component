import { FilterComponent } from '~/components';
import { Categories, Nodes } from '~/models';
import { WrapperProductCards } from '..';

type Props = {
  initialValue: string;
  products: Nodes;
  options: Categories;
  handleChangeCategory: (e: any) => void;
};

export const SectionProducts = ({
  initialValue,
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
        initialValue: initialValue,
        onChange: handleChangeCategory,
      }}
    />
    <WrapperProductCards products={products} />
  </section>
);
