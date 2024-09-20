import React, { useContext } from "react";
import Taladro from "../../../assets/img/fondo-taladro.jpg";
import Taladro2 from "../../../assets/img/fondo-taladro2.jpg";
import { Carousel } from "@material-tailwind/react";
import { CartContext } from "../../context/ShoppingCartContext";

export const Promocion = ({ promo }) => {

  const { addToCart } = useContext(CartContext);

  return (
    <div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 px-8 py-24">
        <Carousel className="rounded-xl">
          <img src={Taladro} alt="image 1" className="h-full w-full" />
          <img src={Taladro2} alt="image 2" className="h-full w-full" />
        </Carousel>
        <div>
          <h2 className="text-4xl font-bold">{promo.name}</h2>
          <p className="text-3xl my-8 text-gray-600">$ {promo.price}</p>
          <button
            className="bg-red-400 w-full py-4 hover:bg-gray-500 font-bold text-white shadow-xl"
            onClick={() => addToCart(promo)}
          >
            Agregar al carrito
          </button>
          <div className="py-5">
            <p>
              {promo.description}
            </p>
            <ul className="list-disc p-5 text-gray-700">
              <li>Potencia y Versatilidad</li>
              <li>Precisión y Eficiencia</li>
              <li>Durabilidad y Vida Útil</li>
              <li>Reguladores de Potencia</li>
              <li>Diseño Ergonómico</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
