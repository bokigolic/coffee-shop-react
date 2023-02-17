const Modal = (props) => {
  const opened = props.opened;
  const toggleModalOpened = props.toggleModalOpened


  return (
    <>
      <div  id="modal" className={opened ? "modal opened" : "modal"}>
        <div className="modal-content">
          <span onClick={toggleModalOpened} className="close">&times;</span>

          <div>
            <img id="americano" src="./assets/img/americano.jpg" alt="Image 1" className="modal-image" />
            <div id="za-size">
              <label for="size">Select size:</label><br />
              <select id="size" name="size" className="select-style">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select><br />
              <label for="milk">Select milk:</label><br />
              <select id="milk" name="milk" className="select-style">
                <option value="whole">Whole</option>
                <option value="skim">Skim</option>
                <option value="almond">Almond</option>
                <option value="oat">Oat</option>
              </select>
            </div>
          </div>

          <div>
            <img id="esspresso" src="./assets/img/esspresso.jpg" alt="Image 2" className="modal-image" />
            <div id="za-size">
              <label for="size">Select size:</label><br />
              <select id="size" name="size" className="select-style">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select><br />
              <label for="milk">Select milk:</label><br />
              <select id="milk" name="milk" className="select-style">
                <option value="whole">Whole</option>
                <option value="skim">Skim</option>
                <option value="almond">Almond</option>
                <option value="oat">Oat</option>
              </select>
            </div>
          </div>

          <div>
            <img id="chapuchino" src="./assets/img/chapuchino.jpg" alt="Image 3" className="modal-image" />
            <div id="za-size">
              <label for="size">Select size:</label><br />
              <select id="size" name="size" className="select-style">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select><br />
              <label for="milk">Select milk:</label><br />
              <select id="milk" name="milk" className="select-style">
                <option value="whole">Whole</option>
                <option value="skim">Skim</option>
                <option value="almond">Almond</option>
                <option value="oat">Oat</option>
              </select>
            </div>

          </div><br />
          <div>

            <img id="iced-coffee" src="./assets/img/iced-coffee.jpg" alt="Image 4" className="modal-image" />
            <div id="za-size">
              <label for="size">Select size:</label><br />
              <select id="size" name="size" className="select-style">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select><br />
              <label for="milk">Select milk:</label><br />
              <select id="milk" name="milk" className="select-style">
                <option value="whole">Whole</option>
                <option value="skim">Skim</option>
                <option value="almond">Almond</option>
                <option value="oat">Oat</option>
              </select>
            </div>

          </div>

          <div>
            <img id="frappe" src="./assets/img/frappe.jpg" alt="Image 5" className="modal-image" />

            <div id="za-size">
              <label for="size">Select size:</label><br />
              <select id="size" name="size" className="select-style">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select><br />
              <label for="milk">Select milk:</label><br />
              <select id="milk" name="milk" className="select-style">
                <option value="whole">Whole</option>
                <option value="skim">Skim</option>
                <option value="almond">Almond</option>
                <option value="oat">Oat</option>
              </select>
            </div>
            <div>
            </div>

          </div>
          <div>
            <img id="late" src="./assets/img/late.jpg" alt="Image 6" className="modal-image" />
            <div id="za-size">
              <label for="size">Select size:</label><br />
              <select id="size" name="size" className="select-style">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select><br />
              <label for="milk">Select milk:</label><br />
              <select id="milk" name="milk" className="select-style">
                <option value="whole">Whole</option>
                <option value="skim">Skim</option>
                <option value="almond">Almond</option>
                <option value="oat">Oat</option>
              </select>
            </div>

          </div>
        </div>
      </div>
    </>
  )
};
export default Modal;