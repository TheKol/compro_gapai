import React from 'react';

const ItemCard = () => {
  return (
    <div className='flex flex-col w-72 h-[422px] rounded-lg border bg-slate-200'>
      <div className='w-full h-72 bg-slate-400 rounded-t-lg'></div>
      <div className='flex flex-col flex-grow justify-between'>
        <div className='bg-white h-[79.5px] p-3 flex flex-row'>
          <div className='bg-lime-300 w-2/3 mr-3'></div>
          <div className='bg-lime-700 w-1/3'></div>
        </div>
        <div className='bg-white h-[42px] rounded-b-lg'></div>
      </div>
    </div>
  );
};

export default ItemCard;
