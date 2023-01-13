import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateProduct = ()=>{

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error,setError] = useState(false)
    const navigate =  useNavigate();

    const updateProduct = async ()=>{
        console.warn(name,price,category,company);
    }

    return (
        <div className='product'>
            <h1>Update Product</h1>
            <input type="text" placeholder='Enter Product Name' onChange={(e)=> setName(e.target.value)} value={name} className='inputBox'/>
            {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type="text" placeholder='Enter Product Price' onChange={(e)=> setPrice(e.target.value)} value={price} className='inputBox'/>
            {error && !price && <span className='invalid-input'>Enter valid price</span>}
            <input type="text" placeholder='Enter Product Category' onChange={(e)=> setCategory(e.target.value)} value={category} className='inputBox'/>
            {error && !category && <span className='invalid-input'>Enter valid category</span>}
            <input type="text" placeholder='Enter Product Company' onChange={(e)=> setCompany(e.target.value)}  value={company} className='inputBox'/>
            {error && !company && <span className='invalid-input'>Enter valid company</span>}
            <button onClick={updateProduct} className='appButton'>Add Product</button>
        </div>
    )
}

export default UpdateProduct;