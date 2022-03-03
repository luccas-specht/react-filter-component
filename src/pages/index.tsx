import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { HomeTemplate } from '~/components';
import { filterProductsByCategory } from '~/utils';
import { MOCK_RESPONSE, DEFAULT_CATEGORIES } from '~/constants';

const Home: NextPage = () => {
  const { nodes } = MOCK_RESPONSE.data;

  const MIN_PRODUCTS_COUNT = 1;

  const [products, setProducts] = useState(nodes);
  const [options, setOptions] = useState(DEFAULT_CATEGORIES);
  const [categoryIdToFilter, setCategoryToFilter] = useState('');

  const handleChangeCategory = (e: any) => {
    setCategoryToFilter(e.target.value);
  };

  useEffect(() => {
    const filteredProducts = filterProductsByCategory({
      products,
      categoryIdToFilter,
    });
    if (filteredProducts.length >= MIN_PRODUCTS_COUNT) {
      setProducts(filteredProducts);
    }

    const filteredOptions = DEFAULT_CATEGORIES.filter(
      (category) => category.id !== categoryIdToFilter
    );
    setOptions(filteredOptions);
  }, [categoryIdToFilter]);

  return (
    <HomeTemplate
      products={nodes}
      options={DEFAULT_CATEGORIES}
      initialValue={categoryIdToFilter}
      handleChangeCategory={handleChangeCategory}
    />
  );
};

export default Home;
