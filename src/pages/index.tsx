import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { HomeTemplate } from '~/components';
import { MOCK_RESPONSE } from '~/constants';
import {
  filterProductsByCategory,
  getAllCategoriesDifferentOfTheCategoryIdToFilter,
} from '~/utils';

const Home: NextPage = () => {
  const { nodes } = MOCK_RESPONSE.data;

  const [products, setProducts] = useState(nodes);
  const [categoryIdToFilter, setCategoryToFilter] = useState('');

  const categories = products.map(({ category }) => category);
  const availableCategories = getAllCategoriesDifferentOfTheCategoryIdToFilter({
    categories,
    categoryIdToFilter,
  });

  const handleChangeCategory = (e: any) => {
    console.log('id??: e.target.value', e.target.value);
    /* setCategoryToFilter(e.target.value); */
  };

  useEffect(() => {
    filterProductsByCategory({ products, categoryIdToFilter, setProducts });
  }, [categoryIdToFilter]);

  return (
    <HomeTemplate
      products={nodes}
      options={availableCategories}
      handleChangeCategory={handleChangeCategory}
    />
  );
};

export default Home;
