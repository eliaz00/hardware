import React from 'react'
import Ferreteria from "../../../assets/img/ferreteria1.jpg";
import { Carousel } from "@material-tailwind/react";

export const Entrada = () => {
  return (
    <Carousel autoplay={true} loop={true} className="w-full h-[450px]">
    <img
      src={Ferreteria}
      alt="image 1"
      className="h-full w-full object-cover"
    />
    <img
      src={Ferreteria}
      alt="image 2"
      className="h-full w-full object-cover"
    />
    <img
      src={Ferreteria}
      alt="image 3"
      className="h-full w-full object-cover"
    />
  </Carousel>
  )
}
