import React from 'react';

const Link = ({route}) => {
    return (
        <li className='mr-12 py-2 hover:bg-purple-700'>
           <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;