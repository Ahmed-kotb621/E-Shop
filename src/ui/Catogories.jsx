import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getCatogories } from '../services/categoryApi';
import Spinner from './Spinner';

function Catogories() {
  const {
    isLoading,
    isError,
    data: catogories,
  } = useQuery({
    queryKey: ['catogories'],
    queryFn: getCatogories,
  });
  if (isLoading) return <Spinner />;

  if (isError) {
    console.log('Errorrr....');
  }

  return (
    <div>{catogories.productData.map((el) => console.log(el.cat_name))}</div>
  );
}

export default Catogories;
