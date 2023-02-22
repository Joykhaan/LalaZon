import React from 'react';
import './Product.css'
import StarIcon from '@material-ui/icons/Star';

const Product = ({id, title, image, price, ratings}) => {
    return (
        <div className='product'>
            <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(ratings).fill().map((_,i)=>(<p> <StarIcon></StarIcon> </p>))}
                    
                </div>
            </div>
            <img src={image} alt="" />
            <button>add to  busket</button>
        </div>
    );
};

export default Product;