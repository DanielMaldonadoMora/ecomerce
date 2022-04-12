import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from '../redux/actions';

const Home = () => {
    const dispatch=useDispatch();
    useEffect(() => {
      dispatch(getProductsThunk())
    }, [dispatch])
    
    return (
        <div>
            home
        </div>
    );
};

export default Home;