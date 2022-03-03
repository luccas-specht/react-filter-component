import type { NextPage } from 'next';
import { ChangeEvent, useEffect, useState } from 'react';

import { HomeTemplate } from '~/components';
import { filterProductsByCategory } from '~/utils';
import { MOCK_RESPONSE, DEFAULT_CATEGORIES } from '~/constants';

const Home: NextPage = () => {
  const { nodes } = MOCK_RESPONSE.data;

  const MIN_PRODUCTS_COUNT = 1;
  const INITIAL_CATEGORY_ID = DEFAULT_CATEGORIES[0].id;

  const [products, setProducts] = useState(nodes);
  const [categoryIdToFilter, setCategoryToFilter] =
    useState(INITIAL_CATEGORY_ID);

  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setCategoryToFilter(e.target.value);
  };

  useEffect(() => {
    const filteredProducts = filterProductsByCategory({
      products: nodes,
      categoryIdToFilter,
    });

    if (filteredProducts.length >= MIN_PRODUCTS_COUNT) {
      setProducts(filteredProducts);
    }
  }, [categoryIdToFilter]);

  return (
    <HomeTemplate
      products={products}
      options={DEFAULT_CATEGORIES}
      handleChangeCategory={handleChangeCategory}
    />
  );
};

export default Home;
