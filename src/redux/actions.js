import axios from "axios"

export const actions={
    setProducts:"SET_PRODUCTS"
}

export const setProducts=products =>({
    type: actions.setProducts,
    payload:products
})

export const getProductsThunk=()=>{

    return dispatch=>{
        axios.get("https://ecommerce-api-react.herokuapp.com/api/v1/products")
        .then(res=>dispatch(setProducts(res.data)))
    }
}