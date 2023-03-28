import React, { useState } from 'react';
import axios from 'axios'
//question about the image portion
const Create = (props) => {
    let emptyListing = {
        houseNum: '',
        street: '',
        city: '',
        state: '',
        zip: Number,
        price: Number,
        bedroom: Number,
        bathroom: Number,
        description: '',
        squareFeet : Number,
        image : ''
    }

    const [listing, setListing] = useState(emptyListing)
    const [homes, setHomes] = useState([])



    const handleChange = (event) => {
        setListing({...listing, [event.target.name]: event.target.value})
    }


    const handleCreate = (newListing) => {
        axios
        .post('http://localhost:8000/homes', newListing)
        .then((response) => {
            console.log(response);
        });
    }

    const handleSubmit=(event) => {
        event.preventDefault()
        props.handleCreate(listing)
    };



    return (
        <div className='mt-4 mx-auto w-8/12 py-8 px-6 shadow-xl rounded-lg sm:px-10 '>
            <h1 className='mb-3 block text-xl font-medium text-gray-700 text-center'>Add A New Listing</h1>
            <form className="bg-white py-8 px-6 shadow-lg rounded-lg sm:px-10" onSubmit={handleSubmit}>
                <label className='block text-xl font-medium text-gray-700' htmlFor="houseNum">House Number: </label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' name="houseNum" onChange = {handleChange}/>
                <br />
                <br />
                <label className='block text-xl font-medium text-gray-700' htmlFor="street">Street: </label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="street" onChange={handleChange}/>
                <br/>
                <br/>
                <label className='block text-xl font-medium text-gray-700' htmlFor="city">City:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="city" onChange={handleChange}/>
                <br/>
                <br/>
                <label className='block text-xl font-medium text-gray-700' htmlFor="state">State:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="state" onChange={handleChange}/>
                <br/>
                <br/>
                <label className='block text-xl font-medium text-gray-700' htmlFor="zip">Zip:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="zip" onChange={handleChange} />
                <br/>
                <br/>
                <label className='block text-xl font-medium text-gray-700' htmlFor="price">Price:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="price" onChange={handleChange} />
                <br/>
                <br/>
                <label className='block text-xl font-medium text-gray-700' htmlFor="bedroom"># of Bedrooms:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="bedroom" onChange={handleChange} />
                <br/>
                <br/>
                <label className='block text-xl font-medium text-gray-700' htmlFor="bathroom"># of Bathrooms:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="bathroom" onChange={handleChange} />
                <br/>
                <br/>
                <label className='block text-xl font-medium text-gray-700' htmlFor="description">Description:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="description" onChange={handleChange} />
                <br/>
                <br/>
                <label className='block text-xl font-medium text-gray-700' htmlFor="squareFeet">Square Feet:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="number" name="squareFeet" onChange={handleChange} />
                <br/>
                <br/>
                <label className='block text-xl font-medium text-gray-700' htmlFor="image">Image:</label>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600' type="text" name="image" onChange={handleChange} />
                <br/>
                <br/>
                <input className='w-full border border-gray-400 px-3 py-1 rounded-md shadow-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-300' type="submit" onChange={handleChange} value="Add Home"/>
            </form>
        </div>
    );
    }
export default Create;