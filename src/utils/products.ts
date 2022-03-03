import { Categories, Nodes, SetTypeFunction } from '~/models';

type FilterProductFunctionParams = {
  products: Nodes;
  categoryIdToFilter: string;
};

type GetCategoriesFunctionParams = {
  categories: Categories;
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
