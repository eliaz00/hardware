import React from "react";
import { Link } from "react-router-dom";

export const Cards = ({ children, id, to }) => {
  return (
    <div>
      <div id={id} className="flex justify-center items-center bg-red-500 h-72">
        <div className="grid gap-5">
          <p>{children}</p>
          <Link to={to}>
          <button
            className="text-xl bg-[#262428] py-3 px-7 hover:bg-[#494949]"
            type="submit"
          >
            Comprar ahora
          </button>
          </Link>
        </div>
      </div>

    </div>
  );
};
