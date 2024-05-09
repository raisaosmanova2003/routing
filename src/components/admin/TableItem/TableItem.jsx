import axios from 'axios'
import React, { useContext } from 'react'
import MainContext from '../../../context/context'

const TableItem = ({item}) => {
  const{data,setData}=useContext(MainContext)
  const deleteItem=(id) =>{
    axios.delete(`http://localhost:3000/products/${id}`).then(res =>{
setData([...data.filter((e)=>e.id!=res.data.id)])
    })
  }
  return (
    <tr>
      <th scope="row">{item.id}</th>
      <td><img src={item.image} alt="" style={{width:"100px"}} /></td>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.description}</td>
      <td><button className='btn btn-danger' onClick={()=>{
        deleteItem(item.id)
      }}>DELETE</button></td>
    </tr>
  )
}

export default TableItem
