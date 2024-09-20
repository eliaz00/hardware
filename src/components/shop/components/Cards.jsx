import React, { useContext } from 'react'
import { CartContext } from '../../context/ShoppingCartContext'

export const Cards = ({ name, price, imgUrl, priceDes, add, tools }) => {

  const { addToCart } = useContext(CartContext)

  return (
    <div>
        <div className={`flex flex-col border border-border rounded-lg p-4 gap-3 ${tools ? "h-[450px]" : ""}`}>
              <img src="https://placehold.co/300x200" alt="Afilador Ergonometrico Wayu" className="w-full h-60 object-cover mb-2" />
              <div>
              <h3 className="text-lg font-semibold">{name}</h3>
              {tools ? (<span className='font-bold'>Articulos: <span className='text-gray-500'>{tools}</span> </span>) : ""}
              <p className="text-muted-foreground">Precio: {priceDes ? (<span className="line-through">${priceDes}</span>) : ("")} <strong>${price}</strong></p>
              </div>
              <button className="bg-red-400 text-white hover:bg-gray-400 w-full p-2 rounded mt-auto font-bold py-3 transition-all" onClick={() => addToCart(add)}>Agregar al carro</button>
          </div>
    </div>
  )
}