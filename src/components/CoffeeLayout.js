const CoffeeLayout = () => {
  return (
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
          <button className="order-menu" id="modal-button">Menu</button>
        </div>
      </div>

      <div>

        <div id="modal" className="modal">
          <div className="modal-content">
            <span className="close">&times;</span>

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
      </div>

      <footer>
        <div className="buttons">
          <button className="location">Find a Location</button>
        </div>
      </footer>




    </div>
  )
}
export default CoffeeLayout;