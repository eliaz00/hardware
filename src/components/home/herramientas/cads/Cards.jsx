import React, { useContext } from "react";
import "../cads/Cards.css";
import { CartContext } from "../../../context/ShoppingCartContext";

export const Cards = ({ id, name, price, add }) => {

  const { addToCart } = useContext(CartContext);

  // const [cart, setCart] = useContext(CartContext)

  // const addToCart = () => {
  //   setCart((currItems) => {
  //     const isItemsFound = currItems.find((item) => item.id === id);
  //     if (isItemsFound) {
  //       return currItems.map((item) => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity + 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //     } else {
  //       return [...currItems, { id, quantity: 1, price }];
  //     }
  //   });
  // };

  return (
    <div>
      <article id={id} className="flex justify-center items-end h-72 cards overflow-hidden">
        <div className="">
          <button
            className="text-xl text-white bg-red-400 py-3 px-16 hover:bg-gray-400"
            type="submit" onClick={() => addToCart(add)}
          >
            Comprar ahora
          </button>
        </div>
      </article>
      <div>
        <p className="font-bold text-gray-600 my-3">{name}</p>
        <p className="font-bold text-gray-600">$ {price}</p>
      </div>
    </div>


  );
};
