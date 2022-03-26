import React from 'react';

// import { formatter } from '../../util/CurencyFormat';

const ItemCard = ({ data }) => {
  return (
    <a
      href='#contact'
      className='flex flex-col w-72 h-[422px] rounded-lg border bg-slate-200 hover:shadow-xl
    ease-in-out duration-300 hover:scale-105'
    >
      <div className='w-full h-72 bg-white rounded-t-lg'>
        <img
          src={data.imageItem}
          alt={data.namaItem}
          className='object-contain w-full h-full rounded-t-lg'
        />
      </div>
      <div className='flex flex-col flex-grow justify-between'>
        <div className='bg-white h-[79.5px] p-3 flex flex-row text-xs'>
          <div className='w-2/3 mr-3 flex flex-col gap-[2px]'>
            <p>Nama</p>
            <p className=''>
              {data.namaItem.substring(0, 14)}
              <span>...</span>
            </p>
          </div>
          <div className='flex flex-col w-1/3 text-right gap-[2px]'>
            <p>harga</p>
            <p></p>
          </div>
        </div>
        <div className='flex bg-white h-[42px] rounded-b-lg text-right text-xs p-3 justify-end items-center'>
          <p>pesan</p>
        </div>
      </div>
    </a>
  );
};

// {formatter.format(data.harga)}

export default ItemCard;
