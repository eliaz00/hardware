import React, { useContext } from "react";
import Logo from "../../assets/img/logo.png";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";
import { CartContext } from "../context/ShoppingCartContext";

export const Navbar = () => {

  const { cart } = useContext(CartContext);

  // const [cart, setCart] = useContext(CartContext)

  // const quantity = cart.reduce((acc, curr) => {
  //   return acc + curr.quantity;
  // }, 0);


  const openMenu = () => {
    let menu = document.getElementById("menu");

    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };
  return (
    <>
      <header className="bg-black text-white w-full h-full">
        <div className="flex">
          <div
            className="flex-1 content-center lg:hidden block"
            onClick={openMenu}
          >
            <svg
              className="mx-auto cursor-pointer h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              strokelinecap="round"
              strokelinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <line x1="4" y1="6" x2="20" y2="6" />{" "}
              <line x1="4" y1="12" x2="20" y2="12" />{" "}
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </div>
          <div className="flex-1 lg:block hidden"></div>
          <div className="flex-1">
            <Link to={"/"} className="" href="">
              <img className="w-36 mx-auto" src={Logo} alt="" />
            </Link>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <ul className="flex gap-5 me-10">
              <li>
                <a href="">
                  <svg
                    className="w-6 text-white hover:text-gray-700 transition"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    strokelinecap="round"
                    strokelinejoin="round"
                  >
                    {" "}
                    <circle cx="11" cy="11" r="8" />{" "}
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </a>
              </li>
              <li className="">
                <Link to={"/cart"} className="flex" href="">
                  <svg
                    className="w-8 text-white hover:text-gray-700 transition"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    strokelinecap="round"
                    strokelinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <circle cx="9" cy="19" r="2" />{" "}
                    <circle cx="17" cy="19" r="2" />{" "}
                    <path d="M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2" />
                  </svg>
                  <span>({cart.length})</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <nav id="menu" className="lg:block hidden">
          <ul className="lg:flex block justify-between lg:mx-8 mx-0 text-xl flex-wrap">
            <li className="hover1">
              <a className="flex items-center gap-2 px-8 py-3" href="">
                <span>Especiales</span>
                <span>
                  <svg
                    className="w-4 text-white mt-2 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokelinecap="round"
                      strokelinejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </a>
              <ul>
                <li>
                  <a href="">Kits</a>
                </li>
                <li>
                  <a href="">Especial</a>
                </li>
              </ul>
            </li>
            <li className="">
              <a className="flex items-center gap-2 px-8 py-3" href="">
                <span>Hogar</span>
                <span>
                  <svg
                    className="w-4 text-white mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokelinecap="round"
                      strokelinejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </a>
              <ul>
                <li>
                  <a href="">Techo</a>
                </li>
                <li>
                  <a href="">Alfombras y tapetes</a>
                </li>
                <li>
                  <a href="">Holaa</a>
                </li>
              </ul>
            </li>
            <li className="">
              <a className="flex items-center gap-2 px-8 py-3" href="">
                <span>Salas</span>
                <span>
                  <svg
                    className="w-4 text-white mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokelinecap="round"
                      strokelinejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </a>
              <ul>
                <li>
                  <a href="">Bisagras para puertas</a>
                </li>
                <li>
                  <a href="">Lámparas de pie</a>
                </li>
                <li>
                  <a href="">Bombillas LED</a>
                </li>
              </ul>
            </li>
            <li className="">
              <a className="flex items-center gap-2 px-8 py-3" href="">
                <span>Baños</span>
                <span>
                  <svg
                    className="w-4 text-white mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokelinecap="round"
                      strokelinejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </a>
              <ul>
                <li>
                  <a href="">Bandejas y rinconeras de ducha</a>
                </li>
                <li>
                  <a href="">Estanterías de baño</a>
                </li>
                <li>
                  <a href="">Portarrollos de papel higiénico</a>
                </li>
              </ul>
            </li>
            <li className="">
              <a className="flex items-center gap-2 px-8 py-3" href="">
                <span>Construccion</span>
                <span>
                  <svg
                    className="w-4 text-white mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokelinecap="round"
                      strokelinejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </a>
              <ul>
                <li>
                  <a href="">Cemento</a>
                </li>
                <li>
                  <a href="">Yeso</a>
                </li>
                <li>
                  <a href="">Bloques de construcción</a>
                </li>
              </ul>
            </li>
            <li className="">
              <a className="flex items-center gap-2 px-8 py-3" href="">
                <span>Iluminacion</span>
                <span>
                  <svg
                    className="w-4 text-white mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokelinecap="round"
                      strokelinejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </a>
              <ul>
                <li>
                  <a href="">Cables electricos</a>
                </li>
                <li>
                  <a href="">Tiras de LED</a>
                </li>
                <li>
                  <a href="">Pilas</a>
                </li>
              </ul>
            </li>
            <li className="">
              <a className="flex items-center gap-2 px-8 py-3" href="">
                <span>Soldadura</span>
                <span>
                  <svg
                    className="w-4 text-white mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokelinecap="round"
                      strokelinejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </a>
              <ul>
                <li>
                  <a href="">Maquinas para soldar</a>
                </li>
                <li>
                  <a href="">Cableado</a>
                </li>
                <li>
                  <a href="">Electrodos</a>
                </li>
              </ul>
            </li>
            <li className="">
              <a
                className="flex items-center bg-red-800 gap-2 px-8 py-3 hover:bg-red-500"
                href="#"
              >
                <span>Regalos</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    className="w-4 text-white mt-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokelinecap="round"
                      strokelinejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </a>
              <ul className="">
                <li>
                  <a href="">Ofertas de la semana</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
