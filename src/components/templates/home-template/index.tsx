import { Categories, Nodes } from '~/models';
import { Container, SectionProducts } from '~/components';

type Props = {
  products: Nodes;
  options: Categories;
  handleChangeCategory: (e: any) => void;
};

export const HomeTemplate = ({
  options,
  products,
  handleChangeCategory,
}: Props) => (
  <Container>
    <SectionProducts
      options={options}
      products={products}
      handleChangeCategory={handleChangeCategory}
    />
  </Container>
);
