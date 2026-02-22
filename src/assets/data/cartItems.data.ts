import { nanoid } from "nanoid";

import cart1 from "../images/cart-1.jpg";
import cart2 from "../images/cart-2.jpg";
import cart3 from "../images/cart-3.jpg";
import cart4 from "../images/cart-4.jpg";

type CartItem = {
  id: string;
  image: string;
  name: string;
  address: string;
  price: string;
};

export const cartItems: CartItem[] = [
  {
    id: nanoid(),
    image: cart1,
    name: "Modern Family House",
    address: "929 Hart St, Brooklyn, NY",
    price: "$375,000/month",
  },
  {
    id: nanoid(),
    image: cart2,
    name: "Cozy Studio Apartment",
    address: "3811 Ditmars Blvd, Astoria, NY",
    price: "$1,890/month",
  },
  {
    id: nanoid(),
    image: cart3,
    name: "Downtown Office Space",
    address: "100 Main St, Manhattan, NY",
    price: "$4,500/month",
  },
  {
    id: nanoid(),
    image: cart4,
    name: "Luxury Beachfront Villa",
    address: "Malibu, California",
    price: "$1,250,000/month",
  },
];
