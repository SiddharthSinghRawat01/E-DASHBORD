import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = ()=>{

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error,setError] = useState(false)
    const navigate =  useNavigate();

    const addProduct = async ()=>{
        if(!name || !price || !category || !company){
            setError(true)
            return false;
        }
        

        const userId = JSON.parse(localStorage.getItem('user'));
        
        let result = await fetch('http://localhost:5000/add-product',{
            method:'post',
            body: JSON.stringify({name,price,company,company,userId}),
            headers:{
                'Content-Type': 'application/json'
            }
        })

        result = await result.json();
        console.warn(result);

        navigate('/')


    }

    return (
        <div className='product'>
            <h1>AddProduct</h1>
            <input type="text" placeholder='Enter Product Name' onChange={(e)=> setName(e.target.value)} value={name} className='inputBox'/>
            {error && !name && <span className='invalid-input'>Enter valid name</span>}
            <input type="text" placeholder='Enter Product Price' onChange={(e)=> setPrice(e.target.value)} value={price} className='inputBox'/>
            {error && !price && <span className='invalid-input'>Enter valid price</span>}
            <input type="text" placeholder='Enter Product Category' onChange={(e)=> setCategory(e.target.value)} value={category} className='inputBox'/>
            {error && !category && <span className='invalid-input'>Enter valid category</span>}
            <input type="text" placeholder='Enter Product Company' onChange={(e)=> setCompany(e.target.value)}  value={company} className='inputBox'/>
            {error && !company && <span className='invalid-input'>Enter valid company</span>}
            <button onClick={addProduct} className='appButton'>Add Product</button>
        </div>
    )
}

export default AddProduct;