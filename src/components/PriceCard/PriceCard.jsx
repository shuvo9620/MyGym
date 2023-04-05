import React from 'react';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4'>
            <h2>
                <span className='text-5xl font-extrabold text-purple-700'>{price.price}</span>
                <span className='text-2xl font-bold'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold'>{price.name}</h5>
        </div>
    );
};

export default PriceCard;