import React, { useEffect, useState } from 'react'

const Home = () => {
  const API_URL="https://fakestoreapi.com/products";
  const[loading,setLoading]=useState(false);
  const[posts,setposts]=useState([])
  async function fetchProductData(){
    setLoading(true);
    try{
      const res=await fetch(API_URL);
      const data=await res.json();
      setposts(data);
    }
    catch(error){
      console.log('error')
    }
    setLoading(false);
  }
  useEffect(()=>{
    fetchProductData();
  },[])
  return (
    <div>
        
    </div>
  )
}

export default Home
