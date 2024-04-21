import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Header } from '../Header';

import "./List.css"
export const List = () => {
    const[cartCount, setCart] = useState(0);
    const cartHandle=()=>{
        setCart(cartCount=>cartCount+cartCount);
    }

    const[phone , setPhone] =useState([
        {
            id: 1,
            brand: "Samsung",
            model: "Galaxy S21",
            price: 999,
            image: "https://www.gizmochina.com/wp-content/uploads/2020/11/Samsung-Galaxy-S21-Ultra-5G-500x500.jpg",
            inStock: 3,
            stock: true,
          },
          {
            id: 2,
            brand: "Apple",
            model: "iPhone 13 Pro",
            price: 1099,
            image: "https://adminapi.applegadgetsbd.com/storage/media/large/3412-49256.jpg",
            inStock: 3,
            stock: false,
          },
          {
            id: 3,
            brand: "Google",
            model: "Pixel 6",
            price: 699,
            image: "https://adminapi.applegadgetsbd.com/storage/media/large/3774-46951.jpg",
            inStock: 3,
            stock: true,
          },
          {
            id: 4,
            brand: "OnePlus",
            model: "9 Pro",
            price: 969,
            image: "//oasis.opstatics.com/content/dam/oasis/page/2021/9-series/compare/in/compare/9-pro/9pPineGreen.png",
            inStock: 0,
            stock: false,
          },
          {
            id: 5,
            brand: "Xiaomi",
            model: "Mi 11 Ultra",
            price: 1199,
            image: "https://www.mobiledokan.co/wp-content/uploads/2020/12/Xiaomi-Mi-11-Ultra-Ceramic-Balck-500x500.jpg",
            inStock: 0,
            stock: true,
          },
          {
            id: 6,
            brand: "Huawei",
            model: "P50 Pro",
            price: 899,
            image: "https://m.media-amazon.com/images/I/617X41AgpzL._AC_SL1500_.jpg",
            inStock: 3,
            stock: true,
          },
          {
            id: 7,
            brand: "Sony",
            model: "Xperia 1 III",
            price: 1299,
            image: "https://www.mobiledokan.co/wp-content/uploads/2020/09/Sony-Xperia-1-III-500x500.jpg",
            inStock: 0,
            stock: false,
          },
          {
            id: 8,
            brand: "LG",
            model: "Wing",
            price: 999,
            image: "https://i.ebayimg.com/images/g/TVkAAOSwNt9jBMV~/s-l500.jpg",
            inStock: 3,
            stock: true,
          },
          {
            id: 9,
            brand: "Motorola",
            model: "Edge+",
            price: 999,
            image: "https://www.mobiledokan.co/wp-content/uploads/2020/03/Motorola-Edge-Plus-Blue-500x500.jpg",
            inStock: 0,
            stock: true,
          },
          {
            id: 10,
            brand: "Asus",
            model: "ROG Phone 5",
            price: 999,
            image: "https://www.mobiledokan.co/wp-content/uploads/2021/03/Asus-ROG-Phone-5-Ultimate-500x500.jpg",
            inStock: 3,
            stock: false,
          },]
    );

    const handleDelete=(id)=>{
        setPhone(phone.filter(phone=>id!==phone.id))
    }
    const [show , hide] = useState(true)
    
  return (
    <>  
        <div className='text-center'>
            <button  onClick={()=>hide(!show)}>
            <FontAwesomeIcon  icon={show? faEyeSlash : faEye}/>
            </button>
        </div>

        <div className='list'>
        
        
        {show && 
        phone.map(({id,image, model, brand, price ,inStock })=> (
            
            <div className="card" key={id}>
                <div className="image-container">
                    <img src={image} alt={model} className="card-image" />
                    {inStock === 0 && <span className="out-of-stock">Out of Stock</span>}
                </div>
                <div className="card-content">
                    <h2 className="card-title">
                        {model}
                    </h2>
                    <small>{brand}</small>
                    <p className="card-price">$ {price}</p>
                    {inStock !==0 ? <button onClick={cartHandle} className="add-to-cart-button">
                    <FontAwesomeIcon icon={faCartPlus} />
                    Add to Cart
                    </button> : <span></span>}
                </div>
                {/* <button onClick={()=>handleDelete(id)}>Delete</button> */}
            </div>
            ))}
        
        
        
    </div>
    </>
    
  )
}
