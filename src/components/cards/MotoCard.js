import React from 'react';

const MotoCard = ({ data }) => {
  return (
    <div
      className='flex flex-col items-center w-60 gap-4 shadow-md p-8 rounded-lg 
    hover:bg-white ease-in duration-100 transition'
    >
      <div className='w-32 h-32'>
        <img
          src={data.image}
          alt={data.title}
          className='w-32 h-32 object-cover'
        />
      </div>
      <h3 className='text-3xl font-semibold'>{data.title}</h3>
      <p className='text-center text-lg'>{data.descMoto}</p>
    </div>
  );
};

export default MotoCard;
