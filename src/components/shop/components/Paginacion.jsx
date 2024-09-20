import React from "react";

export const Paginacion = ({productsPorPage,currentPage,setCurrentPage,totalProducts,}) => {
  
  const pageNumbers = [];// se guarda el calculo

  for (let i = 1; i <= Math.ceil(totalProducts / productsPorPage); i++) {//calculo para la cantidad de paginaciones
    pageNumbers.push(i);
  }

  const limitPage = pageNumbers.length

  const onPreviusPage = () => {
    if(currentPage > 1){

      setCurrentPage(currentPage - 1);
    }
  };

  const onNextPage = () => {
    if(currentPage < limitPage){

      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center mt-8">
      <div className="join">
        <button className={`join-item btn w-20 bg-red-400 text-2xl ${currentPage === 1 ? 'btn-disabled' : ''}`} onClick={onPreviusPage}>«</button>
        <button className="join-item btn w-20">{currentPage}</button>
        <button className={`join-item btn w-20 bg-red-400 text-2xl ${currentPage >= limitPage ? 'btn-disabled' : ''}`} onClick={onNextPage}>»</button>
      </div>
    </div>
  );
};
