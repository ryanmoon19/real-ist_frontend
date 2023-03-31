import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import Update from './Update'
import Create from './Create';



const Home = () =>{
    const [homes, setHomes] = useState([]);
    const [apiHomes, setApiHomes] = useState([]);
    let [newListing, setNewListing] = useState([]);
    const [updated, setUpdated] = useState(false);

    const {id} =useParams()
    
    const getHomes = () => {
    axios.get('http://localhost:8000/homes/all')
    .then((response) => {
        console.log(response.data);
        setHomes(response.data)
    }, 
    (err) => console.log(err))
    .catch((error) => console.log(error))
    }

    const getOneHome = (id) => {
        return axios.get(`http://localhost:8000/homes/${id}`)
            .then((response)=>{
                return response.data
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    const zillowApi = () => {
        // const options = {
        //     method: 'GET',
        //     url: 'https://zillow56.p.rapidapi.com/search',
        //     params: {location: 'Los Angeles, ca'},
        //     headers: {
        //         'X-RapidAPI-Key': 'c834d0f3b7msh4555611b2487197p1f938bjsn275578de3715',
        //         'X-RapidAPI-Host': 'zillow56.p.rapidapi.com'
        //         }
        //     };
            
        // axios.request(options).then(function (response) {
        //     console.log(response.data.results);
        //     setApiHomes(response.data.results)
        // }).catch(function (error) {
        //     console.error(error);
        // });
    }



    
    useEffect(()=>{
    getHomes()
    // zillowApi()
    }, [])

    useEffect(() => {
    getHomes();
}, [updated]);


    return(
        <>
                  {/* < Create handleCreate={handleCreate} /> */}
            <div className="grid grid-cols-fluid gap-6 mt-5">
                {homes.map((home)=> {
                return (
                    <div>
                    {/* <h2>a home</h2>
                    <p>Street: {home.houseNum} {home.street}</p>
                    <p>State: {home.state}</p>
                    <p>Zip: {home.zip}</p>
                    <p>Price: {home.price}</p>
                    <p>Bedroom: {home.bedroom} Bath: {home.bathroom}</p>
                    <p>Size: {home.squareFeet} sqft</p> */}
                        <div>
                            <Link to={`/oneHome/${home.id}`} onClick={() => getOneHome(home.id)}>
                                <img className='ml-auto mr-auto' style={{width: "330px", height:"240px"}} src={home.image}/>
                            </Link>
                        </div>
                    {/* <p>{home.description}</p>
                    <button onClick={handleDelete} value={home.id}>DELETE</button>
                    <Update handleUpdate={handleUpdate} home={home}/> */}
                    </div>
                )
                })}
            </div>
        </>
    )

}

export default Home