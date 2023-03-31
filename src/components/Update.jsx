import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Update = (props) => {
    const [home, setHome] = useState({});
    const [formData, setFormData] = useState({...props.home}); 
    const { id } = useParams();

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     props.handleChange(formData)
    // };
    const handleSubmit= async(event) => {
        event.preventDefault()
        await handleChange(formData)
    };

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

    return (
        <div className='sm:flex justify-around h-11/12 sm:w-11/12 ml-auto mr-auto sm:mt-10'>
            <div className='h-full sm:w-3/6 w-full'>
                <img className='ml-auto mr-auto w-full h-80' src={home.image}/>
            </div>
            <form className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10" onSubmit={handleSubmit}>
                <label className='block text-xl font-medium text-gray-700' htmlFor="houseNum">House Number: </label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="houseNum" value={formData.houseNum} onChange={handleChange} />
                <br />
                <br />
                <label className='block text-xl font-medium text-gray-700' htmlFor="street">Street: </label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="street" value={formData.street} onChange={handleChange} />
                <br />
                <br />
                <label className='block text-xl font-medium text-gray-700' htmlFor="city">City:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="city" value={formData.city} onChange={handleChange} />
                <br />
                <br />
                <label className='block text-xl font-medium text-gray-700' htmlFor="state">State:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="state" value={formData.state} onChange={handleChange} />
                <br />
                <br />
                <label className='block text-xl font-medium text-gray-700' htmlFor="zip">Zip:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="zip" value={formData.zip} onChange={handleChange} />
                <br />
                <br />
                <label className='block text-xl font-medium text-gray-700' htmlFor="price">Price:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="price" value={formData.price} onChange={handleChange} />
                <br />
                <br />
                <label className='block text-xl font-medium text-gray-700' htmlFor="bedroom"># of Bedrooms:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="bedroom" value={formData.bedroom} onChange={handleChange} />
                <br />
                <br />
                <label className='block text-xl font-medium text-gray-700' htmlFor="bathroom"># of Bathrooms:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="bathroom" value={formData.bathroom} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="description">Description:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="description" value={formData.description} onChange={handleChange} />
                <br />
                <br />
                <label className='block text-xl font-medium text-gray-700' htmlFor="squareFeet">Square Feet:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="squareFeet" value={formData.squareFeet} onChange={handleChange} />
                <br />
                <br />
                <label className='block text-xl font-medium text-gray-700' htmlFor="image">Image:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="image" value={formData.image} onChange={handleChange} />
                <br />
                <br />
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-300' type="submit" value="Update" />
            </form>
        </div>
    )
}

export default Update