import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { removeSelectedProduct, selectedProduct } from './redux/actions/productActions';

const ProductDetails = () => {
    const product = useSelector((state) => state.product);
    const {title, price, category, image, description} = product;
    const { id } = useParams();
    const dispatch = useDispatch();
    // console.log("this i ", id );
    // console.log("thddddd ", product);

    const fetchProductDetail = async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        // console.log("aaaaaaaaa",response)

        dispatch(selectedProduct(response.data));
    }

    useEffect(()=>{
        if ( id && id !== "") fetchProductDetail();
        return ()=> { 
            dispatch(removeSelectedProduct());
        }
    }, [ id ])
     return ( 
     <div className='ui grid container' style={{paddingTop: '100px'}}>
         {Object.keys(product).length === 0 ? (<div> ...Loading </div>):(
            <div className='ui placeholder segment'>
                <div className='ui two column stackable center aligned grid'>
                    <div className='ui vertical divider'> </div>
                    <div className='middle aligned row'>
                        <div className='column lp' >
                            <img className='ui fluid image' src={image} style={{padding: "100px"}}/>
                        </div>
                        <div className='column rp' >
                            <h1 >{title}</h1>
                            <h2 >
                                <a className='ui teal tag label' style={{  fontSize:'30px' }}> $ {price}</a>
                            </h2>
                            <div style={{
                                height: "80px",
                                width: " 100%",
                                border: "1px #ffc7a8",
                                backgroundColor:'#ffc7a8',
                                paddingTop:'15px',
                                marginBottom:'10px',
                                borderRadius:'10px'
                                }}>
                            <h3  
                            style={{fontSize:'40px', 
                                    height:'80px', 
                                    textTransform:"capitalize",
                                    color:'#a5673f',
                                }}> {category}</h3> </div>
                            <p>{description}</p>
                            <div className='ui vertical animated button' tabIndex="0" style={{ color:'white',backgroundColor: "#ff0000"}}>
                            <div className='hidden content'  >
                                <i className='shop icon'></i>
                            </div>
                            <div className='visible content'>Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         )}
            
         
     </div>
        
    )
}

export default ProductDetails
