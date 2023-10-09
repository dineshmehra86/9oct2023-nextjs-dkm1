"use client"
// 1. Import Area
import {useState} from 'react'
// will be come from some location
// Import DefaultImport from '../somelocation';

// will be come from node_module library
// Import DefaultImport from 'somelibrary';

// 2. Defination Area

// If a variable defined outside the function defination is called Global variable
// Global Variable
let name="Dinesh Kartik";
function Home() {
  // 2.1 Hooks Area
  // const [variableName, setVariableFunction] = useState(initialData);
  const [name3,setVariableFunction] = useState ('Kunal');

  let name2 = "Chirag Mehra"
  // Every function may return something
  // Every function return some html i.e. JSX
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello {name}</h1>
      <h4>Hello {name2}</h4>
      <h2>Hello {name3}</h2>
    </main>
  )
}

// 3. Export Area
// 3.1 default import
export default Home;