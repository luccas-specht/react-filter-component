import { Nodes } from '~/models';

type FilterProductsFunctionParams = {
  products: Nodes;
  categoryId: string;
};

export const filterProductsByCategoryId = ({
  products,
  categoryId,
}: FilterProductsFunctionParams) =>
  products.filter(({ category }) => category.id === categoryId);
