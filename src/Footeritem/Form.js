import { json } from 'react-router-dom';
import React, { useEffect } from 'react'
import { useState } from 'react'
export default function Form() {
  
// const response = {
//     statusCode: 200,
//     headers:headers,
//     body: JSON.stringify(form),
// };
// return response;
    const [form,setform] =useState({});
    const handleform =(e)=>{
        setform({
            ...form,
            [e.target.name]:e.target.value
        })
    }
    const handlesubmit=async(e)=>{
        e.preventDefault();
       const response=await fetch('http://34.131.136.80/demo',{
        statusCode: 200,
            method:'POST',
            body:JSON.stringify(form),
            // headers:{
            //     'Content-Type':'application/json'
            // }
             headers :{'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}
        })
        const data=await response.json();
        console.log(data);
    }
    const getuser=async()=>{
        const response=await fetch('http://34.131.136.80/demo',{
            method:'GET',
            statusCode: 200,
            headers :{'Content-Type':'application/json',
                    'Access-Control-Allow-Origin':'*',
                    'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'}
        })
        const data=await response.json();
        console.log(data)
    }
    useEffect(()=>{
        getuser();
    },[])
  return (
    <div>
    
      <div className="container mt-5 mb-5" style={{width:"50%"}}>
      <h2 className="mb-3">CONTACT US</h2>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" name='name' type="text" id="name" onChange={handleform} required />
        </div>
        
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" name='email' id="email" onChange={handleform} required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Health related query
          </label>
          <textarea className="form-control" name='query' id="message" onChange={handleform} required />
        </div>
        <button className="btn btn-danger" type="submit">
        submit
        </button>
      </form>
    </div>
    </div>
  )
}
