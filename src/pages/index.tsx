import type { NextPage } from 'next';
import { ChangeEvent, useEffect, useState } from 'react';

import { HomeTemplate } from '~/components';
import { filterProductsByCategoryId } from '~/utils';
import { MOCK_RESPONSE, DEFAULT_CATEGORIES } from '~/constants';

const Home: NextPage = () => {
  const { nodes } = MOCK_RESPONSE.data;
  const INITIAL_CATEGORY_ID = DEFAULT_CATEGORIES[0].id;

  const [products, setProducts] = useState(nodes);
  const [categoryIdToFilter, setCategoryToFilter] =
    useState(INITIAL_CATEGORY_ID);

  const handleChangeCategory = (event: ChangeEvent<HTMLInputElement>) => {
    setCategoryToFilter(event.target.value);
  };

  useEffect(() => {
    const filteredProducts = filterProductsByCategoryId({
      products: nodes,
      categoryId: categoryIdToFilter,
    });

    setProducts(filteredProducts);
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
