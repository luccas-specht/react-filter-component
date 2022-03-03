import { Categories, Nodes } from '~/models';
import { Container, WrapperProductCards, SectionProducts } from '~/components';

type Props = {
  initialValue: string;
  products: Nodes;
  options: Categories;
  handleChangeCategory: (e: any) => void;
};

export const HomeTemplate = ({
  initialValue,
  products,
  options,
  handleChangeCategory,
}: Props) => {
  return (
    <Container>
      <SectionProducts
        initialValue={initialValue}
        products={products}
        options={options}
        handleChangeCategory={handleChangeCategory}
      />
    </Container>
  );
};
