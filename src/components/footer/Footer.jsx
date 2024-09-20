import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div id="footer" className="bg-black">
      <div className="grid lg:grid-cols-4 grid-cols-1 text-white lg:mx-32 lg:text-start text-center py-16">
        <div>
          <h3 className="text-xl font-bold">Nuestras politicas</h3>
          <ul className="flex flex-col gap-2 text-sm mt-3">
            <li>
              <a href="">Cambios y devoluciones</a>
            </li>
            <li>
              <a href="">Términos y condiciones</a>
            </li>
            <li>
              <a href="">Política de privacidad</a>
            </li>
            <li>
              <a href="">Política de despacho</a>
            </li>
          </ul>
        </div>
        <div className="lg:mt-0 mt-10">
          <h3 className="text-xl font-bold">Te ayudamos</h3>
          <ul className="flex flex-col gap-2 text-sm mt-3">
            <li>
              <a href="">Contacto</a>
            </li>
            <li>
              <a href="">Nuestras Tiendas</a>
            </li>
            <li>
              <a href="">Preguntas frecuentes</a>
            </li>
            <li>
              <a href="">Ventas Corporativas</a>
            </li>
          </ul>
        </div>
        <div className="text-center lg:mt-0 mt-10">
          <h3 className="text-xl">Newsletter</h3>
          <div className="mt-3 text-sm">
            <p>Sé el primero en enterarte de todas las novedades</p>

            <p className="bg-red-400 py-3 mt-4 font-bold">
              Encuenta lo que necesites
            </p>
          </div>
        </div>
        <div className="">
        </div>
      </div>

      <div className="text-white text-center text-sm py-10">
        <p>
          © 2024, HardWare cl Tecnología de Shop Diseñado y desarrollado por
          MysterProm{" "}
        </p>
      </div>
    </div>
  );
};
