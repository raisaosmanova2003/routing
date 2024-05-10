import React from 'react'

const CardItem = ({ item }) => {
  return (
    <div >
      <div className="card" style={{ width: "18rem" }}>
        <img height={"240px"} src={item.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.category}</p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

export default CardItem
