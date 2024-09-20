import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";
import "../Router/ShoppingCart.css"

export const ShoppingCart = () => {
  const { cart, increaseQuantity, decreaseQuantity, eliminate } = useContext(CartContext);

  console.log("Cart:", cart);

  return (
    <div className="">
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold text-gray-700 my-16">
          Carrito de Compras
        </h1>
        {cart.length === 0 ? (
          <div className="h-screen">
            <p className="text-center text-gray-600">Su carro actualmente está vacío.</p>
          </div>
        ) : (
          <div className="overflow-x-auto my-20">
            <table className="table container">
              <thead className="lg:contents hidden">
                <tr>
                  <th></th>
                  <th className="ps-16">Producto</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody className="contents">
                {cart.map((product, index) => (
                  <tr className="responsive-table" key={index}>
                    <th>
                    <button className="font-bold text-xl" onClick={() => eliminate(product.id)}>X</button>
                    </th>
                    <td className="flex">
                      <img
                        className="w-48 lg:mx-0 mx-auto"
                        src={`../../../images/${product.imgUrl}`}
                        alt=""
                      />        
                    </td>
                    <td className="lg:text-start text-center">{product.name}</td>
                    <td className="lg:text-start text-center">$ {product.price}</td>
                    <td className="lg:mx-0 mx-auto">
                      <div className="flex">
                        <button onClick={() => decreaseQuantity(product.id)}>
                          <svg
                            class="w-7"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            strokelinecap="round"
                            strokelinejoin="round"
                          >
                            {" "}
                            <path stroke="none" d="M0 0h24v24H0z" />{" "}
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                        <input
                          className="w-12 text-center text-xl"
                          type="text"
                          name=""
                          id=""
                          value={product.quantity}
                        />
                        <button onClick={() => increaseQuantity(product.id)}>
                          <svg
                            class="w-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            strokelinecap="round"
                            strokelinejoin="round"
                          >
                            {" "}
                            <line x1="12" y1="5" x2="12" y2="19" />{" "}
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                      </div>
                    </td>
                    <td className="lg:mx-0 mx-auto">
                      <input className="lg:text-start text-center" type="" name="" id="" value={'$ '+(product.price) * (product.quantity)} />
                      {/* $ {(product.price) * (product.quantity)} */}
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
};
