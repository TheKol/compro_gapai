import React from 'react';
import ItemCard from './cards/ItemCard';

const ARRAY_CARD = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30,
];

const ListSupply = () => {
  return (
    <div className='flex flex-col items-center'>
      <h3 className='mb-8 text-2xl font-bold'>Items</h3>
      <div className='grid grid-cols-5 gap-4 mb-16'>
        {ARRAY_CARD.map((item) => (
          <ItemCard />
        ))}
      </div>
    </div>
  );
};

export default ListSupply;
