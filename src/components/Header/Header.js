import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import logo from '../../logo.png'

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between'>
            <div className='hidden md:block w-44'>
                <Link to='/' className='flex items-center justify-between font-sans font-bold text-2xl text-gray-600'>
                    <h1>Crypto Cafe</h1>
                    <span className='text-2xl'>☕</span>
                </Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/coins'>Coins</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </div>
        </div>
    );
};

export default Header;