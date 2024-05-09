import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import routes from './Routes/routes'
import "bootstrap/dist/css/bootstrap.css"
import MainContext from "./context/context"
import { useEffect, useState } from 'react'
import axios from 'axios'
function App() {
const router = createBrowserRouter(routes)
const [data,setData]=useState([])
const [loading,setloading]=useState(true)
const [error,setError]=useState("")
useEffect(()=>{
  axios.get("http://localhost:5178/products").then(res=>{
    setData([...res.data])
    setloading(false)
  }).catch(error =>{
    setError(error.message)
    console.log(error.message)
    setloading(false)
  })
},[]);
const contextdata={
  data,setData,loading,setloading,error,setError
}

  return (
  <MainContext.Provider value={contextdata}>
    <RouterProvider router={router}/>
  </MainContext.Provider>
  )       
}

export default App
