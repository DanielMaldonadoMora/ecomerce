import axios from "axios"

export const actions={
    setProducts:"SET_PRODUCTS",
    setIsLoading:"SET_IS_LOADING",
    setCategories:"SET_CATEGORIES"
}

const getConfig=()=>({
    headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
});

export const setProducts=products =>({
    type: actions.setProducts,
    payload:products
})


export const setCategories= categories=>({
    type: actions.setCategories,
    payload:categories
})

 export const setIsLoading=isLoading=>({
     type:actions.setIsLoading,
     payload:isLoading
 })
export const getProductsThunk=()=>{

    return dispatch=>{

        dispatch(setIsLoading(true))

       return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then(res=>dispatch(setProducts(res.data?.data.products)))
        .finally(()=>dispatch(setIsLoading(false)))
    }
}


export const getCategoriesThunk=()=>{
    return dispatch=>{

        dispatch(setIsLoading(true))

       return axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products/categories")
        .then(res=>dispatch(setCategories(res.data?.data.categories)))
        .finally(()=>dispatch(setIsLoading(false)))
    }
}


export const filterCategoryThunk= id=>{
    return dispatch=>{
        dispatch(setIsLoading(true))
        return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/?category=${id}`)
        .then(res=>dispatch(setProducts(res.data?.data.products)))
        .finally(()=>dispatch(setIsLoading(false)))
    
    }
}
export const filterTitleProductThunk= productToFind=>{
    return dispatch=>{
        dispatch(setIsLoading(true))
        return axios.get(`https://ecommerce-api-react.herokuapp.com/api/v1/products/?query=${productToFind}`)
        .then(res=>dispatch(setProducts(res.data?.data.products)))
        .finally(()=>dispatch(setIsLoading(false)))
    
    }
}

export const loginThunk=credentials=>{
    return dispatch=>{
        dispatch(setIsLoading(true));
        return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/users/login',credentials)
        .finally(()=>dispatch(setIsLoading(false)));
    }
}

export const addToCartThunk=product=>{
    return dispatch=>{
        dispatch(setIsLoading(true));
        return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart',product, getConfig())
        .finally(()=>dispatch(setIsLoading(false)));
    }
}