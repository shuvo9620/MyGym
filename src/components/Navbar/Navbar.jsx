import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Login', path: '/login' }
    ];

    return (
        <nav className='text-white'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {open === true ?
                        <Bars3Icon className="h-6 w-6 text-purple-500" />
                        :<XMarkIcon className="h-6 w-6 text-purple-500" />
                    }
                </span>

            </div>
            <ul className={`md:flex absolute md:static pl-4 bg-purple-500 duration-500 ${open ? 'top-6' : '-top-64'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;