import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const Card = () => {
  const {data,setData}=useContext(MainContext)
  return (
    <div className="container " style={{marginTop:"5rem",display:"flex",gap:"2rem", marginBottom:"3rem"}} >
    {
      data.map((item,index)=>(
<div className="card" style={{width: "18rem"}}>
    <img className="card-img-top" src={item.image} alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <p className="card-text">{item.price}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
      ))
    }
   
  </div>
 
  )
}

export default Card
