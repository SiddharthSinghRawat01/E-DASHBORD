import React, { useState } from 'react';

const AddProduct = ()=>{

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');

    const addProduct = async ()=>{
        // console.warn(name,price,company,company);

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


    }

    return (
        <div className='product'>
            <h1>AddProduct</h1>
            <input type="text" placeholder='Enter Product Name' onChange={(e)=> setName(e.target.value)} value={name} className='inputBox'/>
            <input type="text" placeholder='Enter Product Price' onChange={(e)=> setPrice(e.target.value)} value={price} className='inputBox'/>
            <input type="text" placeholder='Enter Product Category' onChange={(e)=> setCategory(e.target.value)} value={category} className='inputBox'/>
            <input type="text" placeholder='Enter Product Company' onChange={(e)=> setCompany(e.target.value)}  value={company} className='inputBox'/>
            <button onClick={addProduct} className='appButton'>Add Product</button>
        </div>
    )
}

export default AddProduct;