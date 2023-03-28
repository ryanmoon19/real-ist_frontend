import React from 'react'

const MainHome = () => {
    return(
        <>
        <div className= "flex flex-col items-center justify-center w-screen h-96 bg-[url('https://www.livebuyers.com/wp-content/uploads/2020/02/Los-Angeles-CA.jpg')] bg-cover bg-no-repeat bg-center bg-fixed">
        <p className="text-[70px] text-white my-0 mx-auto text-shadow-lg">Let us take you home.</p>
        <input className="my-0 text-black border border-gray-400 rounded-md w-96 px-4 py-2 mt-4"type="text" placeholder="Search a Zipcode or State"/>
        </div>

        </>
    )
}

export default MainHome