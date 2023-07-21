import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='detalle'>
        <h2> {nombre} </h2>
        <h3>Precio: {precio} </h3>
        <h3>ID: {id} </h3>
        <img className='imgDetalle' src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail