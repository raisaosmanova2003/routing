import React from 'react'
import TableItem from '../TableItem/TableItem'

const Table = ({items}) => {
  return (
    
    <table className="table table-dark">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Image</th>
        <th scope="col">name</th>
        <th scope="col">Price</th>
        <th scope="col">Description</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody>
     
     {
       items.map((item,index)=>{
        return(<TableItem key={index} item={item}/>)
       })
     }
     
    </tbody>
  </table>
    
  )
}

export default Table
