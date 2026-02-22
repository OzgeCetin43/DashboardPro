import React from "react";
import { FaTimes } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

import { cartItems } from "../assets/data/cartItems.data";

interface CartProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({ setIsOpen }) => {
  return (
    <div className="absolute flex flex-col gap-4 w-4/5 h-[88vh] md:w-1/2 md:h-[98vh] overflow-y-auto top-0 right-0 mt-[1vh] mr-[2vw] md:mr-[0.5vw] bg-bg-secondary p-4 rounded-xs shadow-xs border border-border-color">
      <div className="flex items-center justify-between border-b border-text-secondary/10 pb-2">
        <h1 className="text-text-primary font-bold">Cart Items</h1>
        <button
          className="text-text-secondary hover:text-text-primary cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>
      </div>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex gap-2 items-center border-b border-text-secondary/10 p-2 text-xs hover:bg-bg-tertiary rounded-xs cursor-pointer"
        >
          <img src={item.image} alt="cart" className="w-12 h-12 rounded-xs" />
          <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-1">
            <div className="flex flex-col gap-1">
              <h1 className="text-text-primary font-bold">{item.name}</h1>
              <span className="text-text-secondary">{item.address}</span>
            </div>
            <span className="text-text-secondary">{item.price}</span>
          </div>
          <button className="text-status-error hover:text-status-error/80 cursor-pointer">
            <MdDeleteOutline size={20} />
          </button>
        </div>
      ))}
      <div className="flex items-center justify-center gap-2 text-xs">
        <button className="w-1/2 p-2 cursor-pointer bg-status-warning/10 hover:bg-status-warning/20 text-status-warning rounded-xs">
          Checkout
        </button>
        <button className="w-1/2 p-2 cursor-pointer bg-status-info/10 hover:bg-status-info/20 text-status-info rounded-xs">
          View Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
