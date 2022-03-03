import { Categories, Nodes } from '~/models';
import { Container, WrapperProductCards } from '~/components';

type Props = {
  products: Nodes;
  options: Categories;
  handleChangeCategory: (e: any) => void;
};

export const HomeTemplate = ({
  products,
  options,
  handleChangeCategory,
}: Props) => (
  <Container>
    <WrapperProductCards products={products} />
  </Container>
);
