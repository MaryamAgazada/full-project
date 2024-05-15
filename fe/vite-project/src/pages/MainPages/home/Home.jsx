import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
function Home() {
   const [data,setData]=useState([])

   function getAllData(params) {
    fetch("https://localhost:3000/")
    .then((response) => response.json())
    .then((data) => setData(data));
  }
  function handleDelete(params) {
    fetch('https://localhost:3000/' + id, {
  method: 'DELETE',
})
.then(res => res.json()) 
.then(data=> setData(data))
  }
   
   useEffect(()=>{
      getAllData()
   },[])
  
  return (
    <div>
   <Helmet>
        <title>home</title>
      </Helmet>
      {data.map((x)=>(
        <div className="card">
            <p>{x.name}</p>
            <p>{x.id}</p>
            <button onClick={()=>handleDelete(x._id)}>delete</button>
            <button onClick={()=>handleDelete(x._id)}>edit</button>
        </div>
      ))}
    </div>
  )
}

export default Home
