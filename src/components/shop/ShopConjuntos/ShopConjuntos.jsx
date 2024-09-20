import React from "react";
import JsonConjutos from "../../../data/dataShop/conjuntoHerramientas.json";
import { Select } from "../components/Select";
import { Cards } from "../components/Cards";
import { Paginacion } from "../components/Paginacion";

export const ShopConjuntos = ({ productsPorPage, currentPage, setCurrentPage }) => {
  const totalProducts = JsonConjutos.length
  const lastPage = currentPage * productsPorPage;
  const firtPage = lastPage - productsPorPage;

  return (
    <div>
      <div className="container mx-auto p-4 my-8">
        <Select />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {JsonConjutos.map((item) => {
            return (
              <Cards
                key={item.id}
                name={item.name}
                price={item.price}
                priceDes={item.priceDes}
                tools={item.tools}
                add={item}
              />
            );
          }).slice(firtPage, lastPage)}
          </div>
          <Paginacion productsPorPage={productsPorPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalProducts={totalProducts}/>
      </div>
    </div>
  );
};
