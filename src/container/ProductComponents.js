import React from 'react';
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom';


const ProductComponents = () => {
    const products = useSelector((state )=> state.allProducts.products);
    const renderList = products.map((product) =>{
        const {id, title, category, image, price} = product;
        return(
            <div className='ui grid'>
            <div className='four wide column' key={id}  >
            <Link to={`/product/${id}`} >
            <div className='ui link cards' style={{paddingTop: '40px', width:'250px', paddingRight:'20px'}}>
                <div className='card' >
                    <div className="image" style={{ padding: "15%", height:'250px', background:'white'}}>
                        <img src={image}  alt={title}/>
                    </div>
                    <div className='content' style={{ zIndex: 10,fontSize: '80%',height: '140px', backgroundColor:'white'}} >
                        <div className='header' > {title} </div>
                        <div className='meta price'> $ {price} </div>
                        <div className='meta'> {category} </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
        </div>
        )
    });
    return <>{renderList}</>
}

export default ProductComponents;
