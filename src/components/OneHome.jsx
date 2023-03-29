import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OneHome = () => {
    const [home, setHome] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
        .get(`http://localhost:8000/homes/${id}`)
        .then((response) => {
            setHome(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);


    return (
        <>
            <div className='sm:flex justify-around h-11/12 sm:w-11/12 ml-auto mr-auto mt-10'>
                {/* left side */}
                <div className=' h-full sm:w-2/5 w-full'>
                    <img className='ml-auto mr-auto' style={{width: "350px", height:"250px"}} src={home.image}/>
                </div>
                {/* right side */}
                <div className=' h-full sm:w-2/5 w-full sm:border-solid sm:border-2 p-2'>
                    {/* Real-ist edit || delete */}
                    <div className='flex justify-between'>
                        <div>
                            <h2 className='text-2xl font-bold'>Real-ist</h2>
                        </div>
                        <div>
                            <p className='tracking-wider mr-5'>Edit || Delete</p>
                        </div>
                    </div>
                    {/* listing price || bed  & bath*/}
                    <div className='flex justify-between mr-5 mt-6'>
                        <div>
                            <h2 className='font-semibold'>${home.price}</h2>
                        </div>
                        <div>
                            <p className='tracking-wide'>{home.bedroom} bed | {home.bathroom} bath | {home.squareFeet} sqft</p>
                        </div>
                    </div>
                    {/* Description */}
                    <div className='mt-20 text-center'>
                        <p>{home.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OneHome;

{/* <p>{id}</p>
<p>Street: {home.street}</p>
<img style={{width: "330px", height:"240px"}} src={home.image}/> */}