import React, { useEffect }from 'react';
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'
import ProductComponents from './ProductComponents';
import { setProducts } from './redux/actions/productActions';



const ProductListing = () => {
    const products = useSelector((state )=> state);
    const dispatch = useDispatch();

    const fetchProducts =async()=>{
        const response = await axios 
        .get('https://fakestoreapi.com/products')
        .catch((err)=> {console.log("Err" , err)});
        dispatch(setProducts (response.data));
    };

    useEffect(()=>{
        fetchProducts();
    }, []);
    // console.log("conslelog wala product",products);
    return (
        <div className="ui grid container">
            <ProductComponents />
        </div> 
    )
}

export default ProductListing
