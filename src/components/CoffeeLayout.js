import { useState } from "react";
import Modal from "./Modal";


const CoffeeLayout = () => {
  const [modalOpened, setModalOpened] = useState(false);



  const toggleModalOpened = (e) => {
    e.stopPropagation();
    if (modalOpened) {
      setModalOpened(false)
    } else {
      setModalOpened(true)
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <div className="logo">
            <img className="esspresso" src="./assets/img/esspresso.png" />
          </div>
          <div className="title">
            <h1>Coffee House</h1>
            <p>Best coffee in town</p>
          </div>

          <div>
            <button onClick={toggleModalOpened} className="order-menu" id="modal-button">Menu</button>
          </div>
        </div>

        <div>


        </div>

        <footer>
          <div className="buttons">
            <button className="location">Find a Location</button>
          </div>
        </footer>

      </div>

      <Modal opened={modalOpened} toggleModalOpened={toggleModalOpened} />
    </>
  )
}
export default CoffeeLayout;