import React from "react";
import "./Productos.css";

export const Productos = () => {
  return (

      <div>
        <div className="flex justify-center my-10">
          <div className="w-2/3 text-center text-2xl font-bold font-serif">
            <h2>
              Nos empeñamos en la calidad de cada producto que entra a nuestro
              mundo, ofreciendo lo mejor para el hogar
            </h2>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center gap-7 py-40 text-3xl font-bold bg-gray-100">
          <section className="w-[425px] h-[520px] bg-black shadow-2xl article-parrilla">
            <div className="my-10 mx-auto w-80 py-5 border-4 border-sky-500">
              <p className="text-white text-center">Parrilla</p>
            </div>
          </section>
          <section className="w-[425px] h-[520px] bg-black shadow-2xl article-cortadora">
            <div className="my-10 mx-auto w-80 py-5 border-4 border-sky-500">
              <p className="text-white text-center">Cortadoras</p>
            </div>
          </section>
          <section className="w-[425px] h-[520px] bg-black shadow-2xl article-soldadura">
            <div className="my-10 mx-auto w-80 py-5 border-4 border-sky-500">
              <p className="text-white text-center">Soldadura</p>
            </div>
          </section>
        </div>
      </div>
  );
};
