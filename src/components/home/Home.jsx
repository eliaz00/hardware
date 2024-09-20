import React from 'react'
import { Entrada } from './entrada/Entrada'
import { Productos } from './productos/Productos'
import { Promocion } from './promocion/Promocion'
import { Regalos } from './regalos/Regalos'
import { Herramientas } from './herramientas/Herramientas'


export const Home = ({ products, promo }) => {
  return (
    <>
      <Entrada />
      <Productos />
      <Promocion promo={promo}/>
      <Regalos />
      <Herramientas products={products}/>
    </>
  )
}
