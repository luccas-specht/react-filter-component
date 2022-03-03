import { Categories, Nodes } from '~/models';
import { Container, SectionProducts } from '~/components';

type Props = {
  products: Nodes;
  options: Categories;
  handleChangeCategory: (e: any) => void;
};

export const HomeTemplate = ({
  products,
  options,
  handleChangeCategory,
}: Props) => {
  return (
    <Container>
      <SectionProducts
        products={products}
        options={options}
        handleChangeCategory={handleChangeCategory}
      />
    </Container>
  );
};
