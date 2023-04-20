import axios from 'axios'
import React,{ useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import productImage from './download.png'
const Landing = () => {

  const [products,setProducts] = useState([])
  const [sorted, setSorted] = useState()
  useEffect (()=>{
    fetchProducts()
  },[])
  const fetchProducts = async ()=>{
      try {
        const res =await axios.get("http://localhost:3001/products")
        setProducts(res.data)

      }catch(err){
        console.log(err)
      }
    }

  const fetchSortedProducts= async ()=>{
      try {
        if(sorted) {
          fetchProducts()
          setSorted(false)
          
        }else{
        
        const res =await axios.get("http://localhost:3001/products/sortAsc")
        setProducts(res.data)
        setSorted(true)
        }
        

      }catch(err){
        console.log(err)
      }
    }

  const addToCart =  async (p_id)=>{
    try{
      const cartItem2 = {
      cart_id: "hello",
      cust_id: "HCFE691702",
      p_id: p_id
      }
      console.log(cartItem2)
      await axios.post("http://localhost:3001/cart",cartItem2)
    }catch(err){
      console.log(err)

    }

  }
  return (
    <div>
      <div className='text-4xl'>
        Browse Products
      </div>
      <div className='flex justify-end'>
      <button className =" bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
      onClick={fetchSortedProducts}>
        Sort By Price
      </button>
      </div>
      <div className='grid grid-cols-3 space-y-5'>
        {
          products.map(products=>(
            
            <div className="flex mx-10 bg-white animate-slideUpCubiBezier animation-delay-2 rounded-lg overflow-hidden shadow-md w-50 h-80" key = {products.p_id}>
              <img src={productImage} alt="Product" className="w-full h-70 object-cover" />
              <div className="p-4">
              <h2 className="text-lg font-semibold mb-10 px-10">{products.p_desc}</h2>
              <p className="text-gray-700 mb-2">${products.p_price}</p>
              <button onClick={()=>addToCart(products.p_id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add to Cart
              </button>
              </div>
      
                
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Landing