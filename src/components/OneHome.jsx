import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Geocode from "react-geocode";
import axios from 'axios';
import {GoogleMap, useLoadScript, MarkerF} from '@react-google-maps/api'




const OneHome = () => {
    const [home, setHome] = useState({});
    const [lat, setLat] = useState();
    const [lng, setLng] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    //google map api key
    const key = process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAP_API_KEY
    const google = window.google;
    const {isLoaded} = useLoadScript({googleMapsApiKey: key})

    // geoloation from address
    Geocode.setApiKey(key);
    Geocode.setLanguage("en");
    Geocode.setRegion("US");

    const homeAddress = home.houseNum + " " + home.street + " " + home.city + " " + home.state + " " + home.zip
    // console.log(homeAddress);

    Geocode.fromAddress(homeAddress)
        .then((response)=>{
            console.log(response);
            const {lat, lng} = response.results[0].geometry.location
            setLat(lat)
            setLng(lng)
            console.log(lat, lng);
        },
        (error)=>{
            console.log(error);
        }
        )

    //Delete
    const handleDelete = (event) => {
        axios.delete(`https://real-ist-backend-tz4r.onrender.com/homes/${event.target.value}`)
        .then((response) =>{
            console.log(response);
            navigate('/homes')
        })
        };

    //rendering data
    useEffect(() => {
        axios
        .get(`https://real-ist-backend-tz4r.onrender.com/homes/${id}`)
        .then((response) => {
            setHome(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [id]);

    //google map
        const center = {lat:lat, lng: lng}
        const Map = () =>{
            return <GoogleMap zoom={15} center={center} mapContainerClassName="w-full h-80 mt-10">
                <MarkerF position={center}/>
            </GoogleMap>
        }

    return (
        <>
            <div className='sm:flex justify-around h-11/12 sm:w-11/12 ml-auto mr-auto sm:mt-10'>
                {/* left side */}
                <div className=' h-full sm:w-3/6 w-full'>
                    <img className='ml-auto mr-auto w-full h-80' src={home.image}/>
                    <div><Map/></div>
                </div>
                {/* right side */}
                <div className=' h-90 sm:w-2/5 w-full sm:border-solid sm:border-2 p-2'>
                    {/* Real-ist edit || delete */}
                    <div className='flex justify-between border-b-4'>
                        <div>
                            <h2 className='text-2xl font-bold'>Real-ist</h2>
                        </div>
                        <div>
                            <p className='tracking-wider mr-5'><Link to='/update' className='text-blue-500'>Edit</Link> || <button onClick={handleDelete} value={home.id} className='text-red-500'>Delete</button></p>
                        </div>
                    </div>
                    {/* listing price || bed  & bath*/}
                    <div className='flex justify-between mr-5 mt-8 '>
                        <div>
                            <h2 className='font-semibold'>${home.price}</h2>
                        </div>
                        <div >
                            <p className='tracking-wide'>{home.bedroom} bed | {home.bathroom} bath | {home.squareFeet} sqft</p>
                        </div>
                    </div>
                    {/* address */}
                    <div className='mt-8 text-center '>
                        <p className='tracking-tight'>{home.houseNum} {home.street} {home.city} {home.state} {home.zip}</p>
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

