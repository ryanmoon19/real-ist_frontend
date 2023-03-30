import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className='flex flex-row items-center justify-between flex-wrap bg-teal-500 p-4'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
            <Link to='/'>
                <span className='font-bold italic text-4xl tracking-tight text-[45px] xl:ml-[350px]'>Real-ist</span>
            </Link>
            </div>

            <div className="flex-grow flex items-center w-auto">
                <div class="text-sm flex flex-grow">
                <Link to="/homes" className="block mt-4 sm:inline-block mt-0 text-teal-200 hover:text-white mr-6 text-[20px] md:ml-9">
                    Buy
                </Link>
                <Link to="/sell" className="block mt-4 sm:inline-block mt-0 text-teal-200 hover:text-white mr-6 text-[20px]">
                    Sell
                </Link>
                </div>
            </div>
            <div className="flex-grow flex justify-center w-auto mt-3 md:mt-0 xl:flex-end xl:ml-[300px]">
                <div className="">
                    <button className="inline-block text-[15px] md:text-[18px] px-6 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 mt-0 ">Log In</button>
                    <button className="inline-block text-[15px] md:text-[18px] px-6 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white ml-4 mt-4 mt-0">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar