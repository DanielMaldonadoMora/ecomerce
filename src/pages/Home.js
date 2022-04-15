import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { filterCategoryThunk, filterTitleProductThunk, getCategoriesThunk, getProductsThunk } from '../redux/actions';

const Home = () => {
    const dispatch=useDispatch();
    const [productToFind, setProductToFind] = useState("")

    const products=useSelector(state=> state.products);
    const categories=useSelector(state=> state.categories);

    useEffect(() => {
      dispatch(getProductsThunk());
      dispatch(getCategoriesThunk());
    }, [dispatch])

    const searchProduct=e=>{
        e.preventDefault();
        dispatch(filterTitleProductThunk(productToFind))
        console.log(productToFind)
    }
    
    return (
        <div>
           <h1>home</h1>
           <form onSubmit={searchProduct}>
               <input 
                    type="text" 
                    name="searchbox" 
                    value={productToFind} 
                    onChange={e=> setProductToFind(e.target.value)} 
                />
                <button>Search</button>
           </form>
           {categories.map(category=>(
               <button key={category.id} onClick={()=> dispatch(filterCategoryThunk(category.id))}>{category.name}</button>
           ))}
            <ul>
                {products.length=== 0 ?  (<p>No encontramos ningun producto que coincida</p>):(
                     products.map(productItem=>(
                        <li key={productItem.id}>
                           <Link to={`product/${productItem.id}`}> {productItem.title}</Link>
                        </li>
                    ))
                )}
                
            </ul>
        </div>
    );
};

export default Home;