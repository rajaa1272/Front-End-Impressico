import React, { useState } from 'react';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [isLive,setIsLive]=useState('');
    const [inStock,setInStock]=useState('');
    const [error,setError] = React.useState(false);

    const addProduct = async () => {

        if(!name || !price || !description || !category ||!isLive ||!inStock)
        {
            setError(true);
            return false
        }

        const userId = JSON.parse(localStorage.getItem('user'))._id;
        let result = await fetch("http://localhost:8080/api/v1/category/{catId}/products", {
            method: "post",
            body: JSON.stringify({ name, price, category, description, userId }),
            headers: {
                "Content-type": "application/json"
            }
        });
        result = await result.json();
        console.warn(result)

    }

    return (
        <div className=' card col-md-4 text-center offset-md-4 mt-5 shadow-lg p-3'>
            <div className="card-header bg-warning text-white text-center">
            <h3>Add Product</h3>
            </div>
            <div className="card-body text-center bg-white justify-content-center">
            
            <input type="text" placeholder='Enter product name' className='form-control mb-3'
                value={name} onChange={(e) => { setName(e.target.value) }}
            /> 
            {error && !name && <span className='invalid-input'>Enter valid name</span>}
            

            <input type="text" placeholder='Enter product price' className='form-control mb-3'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            />
            {error && !price && <span className='invalid-input'>Enter valid price</span>}

            <input type="text" placeholder='Enter product category' className='form-control mb-3'
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            />
            {error && !category && <span className='invalid-input'>Enter valid category</span>} 

            <input type="text" placeholder='Enter product description' className='form-control mb-3'
                value={description} onChange={(e) => { setDescription(e.target.value) }}
            />
            {error && !description && <span className='invalid-input'>Enter valid description</span>}
            
            <input type="number" placeholder='Enter product islive or not' className='form-control mb-3'
                value={isLive} onChange={(e) => { setIsLive(e.target.value) }}
            />
            {error && !isLive && <span className='invalid-input'>Enter valid input</span>}
            
            <input type="number" placeholder='Enter product isavailable or not' className='form-control mb-3'
                value={inStock} onChange={(e) => { setInStock(e.target.value) }}
            />
            {error && !inStock && <span className='invalid-input'>Enter valid input</span>}
            

            <button onClick={addProduct} className='btn btn-warning text-white'>Add Product</button>
            </div>
        </div>
    )
}

export default AddProduct;