import { Categories, Nodes, SetTypeFunction } from '~/models';

type FilterProductFunctionParams = {
  products: Nodes;
  categoryIdToFilter: string;
  setProducts: SetTypeFunction<Nodes>;
};

type GetCategoriesFunctionParams = {
  categories: Categories;
  categoryIdToFilter: string;
};

export const filterProductsByCategory = ({
  products,
  categoryIdToFilter,
  setProducts,
}: FilterProductFunctionParams) => {
  const filteredProducts = products.filter(
    ({ category }) => category.id === categoryIdToFilter
  );
  setProducts(filteredProducts);
};

export const getAllCategoriesDifferentOfTheCategoryIdToFilter = ({
  categories,
  categoryIdToFilter,
}: GetCategoriesFunctionParams) =>
  categories.filter(({ id }) => id !== categoryIdToFilter);
