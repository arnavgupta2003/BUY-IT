import axios from 'axios'
import React,{ useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import productImage from './download.png'
const Cart = () => {
  const [cart,setCart] = useState([])
  const [product,setProduct] = useState([])
  useEffect (()=>{
    fetchProducts()
  },[])
  const fetchProducts = async ()=>{
      try {
        const customerId = "HCFE691702";
        const res =await axios.get(`http://localhost:3001/cartShow?customerId=${customerId}`);
        setCart(res.data)
        console.log(cart)
        
      }catch(err){
        console.log(err)
      }
    }
    
  return (
    <div>
      <div>
        <div className='text-4xl'>
        Cart of HCFE691702
      </div>
      <div className='grid grid-cols-1 animate-slideUpCubiBezier animation-delay-2 space-y-5'>
      
        {
          cart.map(cart=>(
            <div className="flex mx-10 bg-white rounded-lg animate-slideUpCubiBezier animation-delay-2 overflow-hidden shadow-md w-50 " key = {cart.p_id}>
              <img src={productImage} alt="Product" className=" object-cover" />
              <div className="p-4">
              <h2 className="text-lg font-semibold mb-10 px-10">{cart.p_desc}</h2>
              <p className="text-gray-700 mb-2">${cart.p_price}</p>
              <div className='flex justify-between'>
              <div className='flex justify-start'>
              <button className =" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Remove from cart
                </button>
              </div>
              <div className=''>
              <button className =" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Increase Quantity
              </button>
              </div>
              <div className='flex justify-end'>
              <button className =" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Decrease Quantity
              </button>
              </div>
              </div>
              </div>
      
                
            </div>
            // <div className='cart p-10' >

            //     <h2>{cart.product_id}</h2>
            //     <h2>{cart.p_desc}</h2>
            //     <h2>${cart.p_price}</h2>
            //     <h2>Total Stock Left</h2>
            //     <h3>{cart.p_quantiity}</h3>
            // </div>
          ))
        }
        </div>
        <div className='text-4xl'>Total Cost $14586</div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Place Order
        </button>
      </div>


    </div>
  )
}

export default Cart