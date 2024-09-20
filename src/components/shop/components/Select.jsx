import React from "react";

export const Select = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:justify-between my-3">
        <div className="w-full md:w-1/4 mb-4">
          <label className="block text-muted-foreground mb-2">
            ORDENAR POR
          </label>
          <select className="border border-border rounded p-2 w-full">
            <option>Características</option>
          </select>
        </div>
        <div className="w-full md:w-1/4 mb-4">
          <label className="block text-muted-foreground mb-2">
            FILTRAR POR
          </label>
          <select className="border border-border rounded p-2 w-full">
            <option>Disponibilidad</option>
            <option>Precio</option>
            <option>Tipo de producto</option>
            <option>Color</option>
          </select>
        </div>
      </div>
    </div>
  );
};
