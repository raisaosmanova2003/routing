import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Card from '../Card/Card'

const Cards = () => {
     const {data} = useContext(MainContext)
  return (
    <div> 
      <Card  items={data}/>.
  
    </div>
  )
}

export default Cards
