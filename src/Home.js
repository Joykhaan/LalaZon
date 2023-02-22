import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
  return (
    <div className='home'>
        {/* <h1>I am the home  component</h1> */}
        <div className='home_container'>
            <img src="https://cdn-anfog.nitrocdn.com/YWeLYDsvjbfgxnQlPsSmsjSfjAlickBu/assets/static/optimized/rev-7548e02/wp-content/uploads/2018/12/CASALS-ONLINE-18-DICIEMBRE.png" alt="" className='home_image' />
           <div className='home_row'> 
            <Product
            title='is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
            image='https://plus.unsplash.com/premium_photo-1675431443185-9d40521c8d5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80'
            price={100}
            ratings={5}
            id="0002"
            />
            <Product
            title='when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,'
            image='https://upload.wikimedia.org/wikipedia/commons/6/65/Product_Photography.jpg'
            price={200}
            ratings={3}
            id="0003"
            />
        </div>
        <div className='home_row'> 
            <Product
            title='but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of'
            image='https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png'
            price={200}
            ratings={3}
            id="0004"
            />
            <Product
            title='Letraset sheets containing Lorem Ipsum passages, and more'
            image='https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80'
            price={200}
            ratings={3}
            id="0005"
            />
            <Product
            title='recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            image='https://www.altosindia.net/public/product/v1-hair-care/onion-hair-conditioner.jpg'
            price={200}
            ratings={3}
            id="0006"
            />
        </div>
        <div className='home_row'> 
            <Product
            title='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in'
            image='https://i.ytimg.com/vi/ETsekJKsr3M/maxresdefault.jpg'
            price={200}
            ratings={3}
            id="0007"
            />
        </div> 
        </div>
        
    </div>
  )
}

export default Home