"use client"

// 1. Import Area
import React from 'react'
import { useEffect } from 'react';
import {useState} from 'react'
import Button from "@mui/material/Button";

// 2. Define Area
function page() {
// 2.1 Hooks area

const [name4, setName4] = useState('Dinesh'); // Hook 1    

 useEffect( ()=>{ // Hook 2
  console.log(`Hello ${name4}`);
 }, []);

// 2.2 function defination area
const dkm = () => {
    console.log("I am showing on button click")
    let x = prompt("Please Enter Your Name?")
    // console.log(x);
    setName4(x);
}
// Function returning JSX
  return (
    <>
      <h1>This is a test page</h1>
      <h1>Hello {name4}</h1>
      <Button variant="contained" onClick={()=>{ dkm() }}>Enter Your Name</Button>
    </>
  )
}
// 3. Export Area
// 3.1 Default Export
export default page;