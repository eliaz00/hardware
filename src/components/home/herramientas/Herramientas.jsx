import React from "react";
import "../herramientas/Herramientas.css";
import { Cards } from "./cads/Cards";
import Video from "../../../assets/video/publicidad.mp4";
import Logo from "../../../assets/img/logo.png";
// import products from "../../../data/products.json";

export const Herramientas = ({ products }) => {

  return (
    <div className="text-center pt-16">
      <h2 className="text-3xl text-gray-800 font-bold">Mejores Productos</h2>

      <div className="grid lg:grid-cols-4 grid-cols-1 my-20 gap-10 mx-10">
        {products.map((item) => {
          return (
            <Cards key={item.id} id={item.item} name={item.name} price={item.price} add={item}/>
          )

        })}
      </div>
      <div className="my-12">
        <button className="bg-red-400 px-12 py-3 text-white font-bold hover:bg-gray-400" type="submit">Ver todo</button>
      </div>

      <div className="fondo-madera bg-black flex justify-center">
        <img className="w-3/12 mx-auto" src={Logo} alt="" />
        <video className="h-96" muted autoPlay loop src={Video} />
      </div>

      <div className="py-7">
        <h2 className="text-4xl font-serif">Ven con los mejores <br />Te esperamos</h2>
      </div>
    </div>
  );
};
