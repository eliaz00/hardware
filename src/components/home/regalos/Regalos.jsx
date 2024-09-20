import React from "react";
import { Cards } from "./cads/Cards";
import "../regalos/Regalos.css";

export const Regalos = () => {
  return (
    <div className="bg-gray-100 text-center font-bold pt-12 text-gray-800">
      <h2 className="text-3xl">ENCUENTRA EL REGALO PERFECTO </h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 my-20 gap-10 mx-10 text-white text-3xl">
        <Cards id={"item-1"} to={"/cuchillos"}>HASTA 14.990</Cards>
        <Cards id={"item-2"} to={"/herramientas"}>HASTA 29.990</Cards>
        <Cards id={"item-3"} to={"/conjuntos"}>HASTA 49.990</Cards>
      </div>

      <div className="hola w-full h-96">
        
      </div>
    </div>
  );
};
