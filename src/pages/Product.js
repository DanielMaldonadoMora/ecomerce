import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {  getProductsThunk } from '../redux/actions';

const Product = () => {

    const {id}=useParams();
    const [productsFiltered, setProductsFiltered] = useState();
    const dispatch=useDispatch();
    const products= useSelector(state=>state.products);

    useEffect(()=>dispatch(getProductsThunk()),[dispatch]);
    
    const productFound= products.find(productItem=> productItem.id===Number(id));
    
    useEffect(()=> {
        axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/?category=${productFound.category.id}`)
        .then(res=>setProductsFiltered(res.data?.data.products))
            },[dispatch,productFound]);
    console.log(productsFiltered)
    return (
        <div>
            <h1>{productFound.title}</h1>
            <img src={`${productFound.productImgs}`} alt="" />
            {id}
            <ul>
            {productsFiltered?.map((productItem) => (
              <li key={productItem.id}>
                <Link to={`/product/${productItem.id}`}>{productItem.title}</Link>
                <img src={productItem.image} alt="" />
              </li>
            ))}
            </ul>
        </div>
    );
};

export default Product;