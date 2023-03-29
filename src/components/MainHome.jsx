import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const MainHome = () => {

    const [homes, setHomes] = useState([]);

    const getOneHome = (id) => {
        return axios.get(`http://localhost:8000/homes/${id}`)
            .then((response)=>{
                return response.data
            })
            .catch((error)=> {
                console.log(error)
            })
        }

    const getHomes = () => {
        axios.get('http://localhost:8000/homes')
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
            <p className="sm:text-[70px] text-[50px] text-white my-0 mx-auto">Let us take you home.</p>
            <input className="my-0 text-black border border-gray-400 rounded-md w-96 px-4 py-3 mt-4"type="text" placeholder="Search a City, ZIP Code, or State"/>
            </div>
            <div className="mt-10">
                <h3 className="text-[25px] text-center">Homes For You</h3>
                <p className="text-[15px] text-center">Current Location Placeholder</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 mx-auto max-w-[1700px]">
                {homes.map((home)=>{
                    return (                
                    <div className="relative flex" key={home.id}>
                        <img className="w-full h-auto" src={home.image} alt={home.description}/>
                        <Link to={`/oneHome/${home.id}`} onClick={() => getOneHome(home.id)}>
                            <div className="absolute inset-0 flex flex-col justify-end px-4 py-6">
                                <p className="text-white text-xl mb-2"><strong>${home.price}</strong></p>
                                <p className="text-white">{home.houseNum} {home.street} {home.city}, {home.state}</p>
                            </div>
                        </Link>
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