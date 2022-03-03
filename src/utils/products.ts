import { Categories, Nodes, SetTypeFunction } from '~/models';

type FilterProductFunctionParams = {
  products: Nodes;
  categoryIdToFilter: string;
};

export const filterProductsByCategory = ({
  products,
  categoryIdToFilter,
}: FilterProductFunctionParams) => {
  const filteredProducts = products.filter(
    ({ category }) => category.id === categoryIdToFilter
  );
  return filteredProducts;
};
