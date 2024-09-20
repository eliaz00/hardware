import React from "react";
import JsonHerramientas from "../../../data/dataShop/herramientas.json";
import { Cards } from "../components/Cards";
import { Select } from "../components/Select";
import { Paginacion } from "../components/Paginacion";

export const ShopHerramientas = ({ productsPorPage, currentPage, setCurrentPage }) => {

  const totalProducts = JsonHerramientas.length

  const lastPage = currentPage * productsPorPage 
  const firtPage = lastPage - productsPorPage

  return (
    <div>
      <div className="container mx-auto p-4 my-8">
        <Select />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {JsonHerramientas.map((item) => {
            return (
              <Cards
                key={item.id}
                name={item.name}
                price={item.price}
                priceDes={item.priceDes}
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
