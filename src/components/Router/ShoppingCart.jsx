import React, { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

export const ShoppingCart = () => {
  const { cart, increaseQuantity, decreaseQuantity, eliminate } = useContext(CartContext);

  console.log("Cart:", cart);

  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-center text-3xl font-bold text-gray-700 my-16">
          Carrito de Compras
        </h1>
        {cart.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          <div className="overflow-x-auto my-20">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th className="ps-16">Producto</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index) => (
                  <tr key={index}>
                    <th>
                    <button className="font-bold text-xl" onClick={() => eliminate(product.id)}>X</button>
                    </th>
                    <td className="flex">
                      <img
                        className="w-36"
                        src={`../../../images/${product.imgUrl}`}
                        alt=""
                      />        
                    </td>
                    <td className="font-bold">{product.name}</td>
                    <td className="font-bold">$ {product.price}</td>
                    <td className="">
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
                    <td className="font-bold w-36">
                      <input type="text" name="" id="" value={'$ '+(product.price) * (product.quantity)} />
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
