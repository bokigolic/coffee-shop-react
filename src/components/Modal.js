import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Modal = (props) => {
  const opened = props.opened;
  const toggleModalOpened = props.toggleModalOpened;

  const [cart, setCart] = useState([]);

  const addToCart = ({ item, quantity }) => {
    const newCartItem = { item, quantity };
    setCart((prevCart) => [...prevCart, newCartItem]);
  };

  const menuData = [
    {
      id: 1,
      name: "Americano",
      price: 3.99,
      imgSrc: "./assets/img/americano.jpg"
    },
    {
      id: 2,
      name: "Coffee house",
      price: 4.99,
      imgSrc: "./assets/img/esspresso.jpg"
    },
    {
      id: 3,
      name: "Cappucino",
      price: 3.99,
      imgSrc: "./assets/img/chapuchino.jpg"
    },
    {
      id: 4,
      name: "Iced Coffee",
      price: 4.99,
      imgSrc: "./assets/img/iced-coffee.jpg"
    },
    {
      id: 5,
      name: "Frape",
      price: 5.99,
      imgSrc: "./assets/img/frappe.jpg"
    },
    {
      id: 6,
      name: "Latte",
      price: 3.99,
      imgSrc: "./assets/img/late.jpg"
    }
  ];

  return (
    <>
      <div id="modal" className={opened ? "modal opened" : "modal"}>
        <div className="modal-content">
          <span onClick={toggleModalOpened} className="close">&times;</span>

          {menuData.map((item) => {
            return (
              <MenuItem
                key={item.id}
                item={item}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      </div>

      <div id="cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((cartItem, index) => (
            <li key={index}>
              {cartItem.item.name} x {cartItem.quantity}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Modal;
