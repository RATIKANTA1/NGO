import React from 'react'
import MyFooter from './MyFooter'
import Navbar from './Navbar'
 import { useState } from 'react'
  
  import axios from 'axios'
  import Swal from 'sweetalert2'


const RegisterIntern = ({tracker}) => {
   let [name,setName]=useState("");
    let [email,setEmail]=useState("");
   let [phone,setPhone]=useState("");
   let [availability,setAvailability]=useState("");
   let [skills,setSkills]=useState("");
 

    const handleSubmit=async(e)=>{
         e.preventDefault();

          const allData={
             Name:name,
             Email:email,
             Phone:phone,
             Availability:availability,
             Skills:skills,
            
          };

         axios.post('https://sheet.best/api/sheets/b9a2cd14-2883-4654-8ee8-1df4c13b82a1',allData).then((response)=>{
           
          alert("successfully registered");
          
        //for pop up
          Swal.fire({
            title: 'Success',
            text: 'you have successfully registered',
            icon: 'success',
            confirmButtonColor:'#3085d6',
             footer:'<a href="/">Go to Home</a>'
          });


      setAvailability('');
       setEmail('');
      
       setName('');
       setPhone('');
       setSkills('');

         }).catch((error)=>{
           console.log(error);
         })
         
    }


  return (
    <>
    <Navbar></Navbar>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      
      
        
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Intern Registration</h2>
        <form className="space-y-6"  onSubmit={handleSubmit} >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={name} 
              onChange={(e)=>{setName(e.target.value)}}  required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={email} 
            onChange={(e)=>setEmail(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={phone} 
            onChange={(e)=>{setPhone(e.target.value)}}  required />
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability</label>
            <input type="text" id="availability" name="availability" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  value={availability} onChange={(e)=>{setAvailability(e.target.value)}} required />
          </div>
          <div>
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Skills</label>
            <textarea id="skills" name="skills" rows="3" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={skills} onChange={(e)=>{setSkills(e.target.value)}} required></textarea>
          </div>
          {/* <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={message} onChange={(e)=>{setMessage(e.target.value)}} required />
          </div> */}
          <div className="text-center">
              
            <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Register
            </button>

          </div>
        </form>
      </div>
       
      
    </div>
    <MyFooter></MyFooter></>
  )
}

export default RegisterIntern