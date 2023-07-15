// import { json } from 'react-router-dom';
// import React, { useEffect } from 'react'
// import { useState } from 'react'
// export default function Form() {
//     const [form,setform] =useState({});
//     const handleform =(e)=>{
//         setform({
//             ...form,
//             [e.target.name]:e.target.value
//         })
//     }
//     const handlesubmit=async(e)=>{
//         e.preventDefault();
//        const response=await fetch('http://localhost:8080/demo',{
//             method:'POST',
//             body:JSON.stringify(form),
//             headers:{
//                 'Content-Type':'application/json'
//             }
//         })
//         const data=await response.json();
//         console.log(data);
//     }
//     const getuser=async()=>{
//         const response=await fetch('http://localhost:8080/demo',{
//             method:'GET',
//         })
//         const data=await response.json();
//         console.log(data)
//     }
//     useEffect(()=>{
//         getuser();
//     },[])
//   return (
//     <div>




//       <form action="" onSubmit={handlesubmit}>
//       <span>username</span>
//         <input type="text" name='username' onChange={handleform} required/>
//         <span>quarry</span>
//         <input type="text" name='quarry' onChange={handleform} required/>
//         <input type="submit" value="submit" />
//       </form>




      
//       <div className="container mt-5">
//       <h2 className="mb-3">CONTACT US</h2>
//       <form onSubmit={handlesubmit}>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="name">
//             name
//           </label>
//           <input className="form-control" name='name' type="text" id="name" onChange={handleform} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="name">
//             number
//           </label>
//           <input className="form-control" type="number" name='number' id="name" onChange={handleform} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="email">
//             email
//           </label>
//           <input className="form-control" type="email" name='email' id="email" onChange={handleform} required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label" htmlFor="message">
//             query
//           </label>
//           <textarea className="form-control" name='query' id="message" onChange={handleform} required />
//         </div>
//         <button className="btn btn-danger" type="submit">
//         submit
//         </button>
//       </form>
//     </div>
    
//     </div>
//   )
// }
