import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className='flex flex-row items-center justify-between flex-wrap bg-teal-500 p-4'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/'>
                <span className='font-bold italic text-4xl tracking-tight'>Real-ist</span>
            </Link>
            </div>

            <div class="flex-grow flex items-center w-auto">
                <div class="text-sm flex flex-grow">
                <Link to="/homes" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-6">
                    Buy
                </Link>
                <Link to="/sell" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-6">
                    Sell
                </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar