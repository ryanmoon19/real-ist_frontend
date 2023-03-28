import React, { useState, useEffect } from 'react';
import axios from 'axios'

const MainHome = () => {

    const [homes, setHomes] = useState([]);

    const getHomes = () => {
        axios.get('http://localhost:8000/homes/all')
        .then((response) => setHomes(response.data), 
        (err) => console.log(err))
        .catch((error) => console.log(error))
        }
        
        useEffect (()=> {
            getHomes()
        },[])

    return(
        <>
            <div className= "flex flex-col items-center justify-center w-screen h-96 bg-[url('https://www.livebuyers.com/wp-content/uploads/2020/02/Los-Angeles-CA.jpg')] bg-cover bg-no-repeat bg-center bg-fixed">
            <p className="text-[70px] text-white my-0 mx-auto text-shadow-lg">Let us take you home.</p>
            <input className="my-0 text-black border border-gray-400 rounded-md w-96 px-4 py-3 mt-4"type="text" placeholder="Search a Zipcode or State"/>
            </div>
            <div className="mt-10 ml-20">
                <h3 className="text-[25px]">Homes For You</h3>
                <p className="text-[15px]">Current Location Placeholder</p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-5 ml-20 w-[1100px]">
                {homes.map((home)=>{
                    return (
                        <div className="relative flex" key={home.id}>
                            <img className="w-full" src={home.image} alt={home.description}/>
                            <p className="absolute bottom-5 left-0 z-10 p-4 text-white text-[20px]"><strong>{home.price}</strong></p>
                            <p className="absolute bottom-0 left-0 z-10 p-4 text-white">{home.houseNum} {home.street} {home.city}, {home.state}</p>
                        </div>
                    )
                    
                })}
            </div>

        </>
    )
}

export default MainHome

//<img style={{width: "330px", height:"240px"}} src={home.image} alt={home.description}/>
//