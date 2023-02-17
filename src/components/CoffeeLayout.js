const CoffeeLayout = () => {
  return (
    <div>
      <div class="header">
        <div class="logo">
          <img class="esspresso" src="./assets/img/esspresso.png" />
        </div>

        <div class="title">
          <h1>Coffee House</h1>
          <p>Best coffee in town</p>
        </div>

        <div>
          <button class="order-menu" id="modal-button">Menu</button>
        </div>
      </div>

      <div>

        <div id="modal" class="modal">
          <div class="modal-content">
            <span class="close">&times;</span>

            <div>
              <img id="americano" src="./assets/img/americano.jpg" alt="Image 1" class="modal-image" />
              <div id="za-size">
                <label for="size">Select size:</label><br />
                <select id="size" name="size" class="select-style">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select><br />
                <label for="milk">Select milk:</label><br />
                <select id="milk" name="milk" class="select-style">
                  <option value="whole">Whole</option>
                  <option value="skim">Skim</option>
                  <option value="almond">Almond</option>
                  <option value="oat">Oat</option>
                </select>
              </div>

            </div>

            <div>
              <img id="esspresso" src="./assets/img/esspresso.jpg" alt="Image 2" class="modal-image" />
              <div id="za-size">
                <label for="size">Select size:</label><br />
                <select id="size" name="size" class="select-style">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select><br />
                <label for="milk">Select milk:</label><br />
                <select id="milk" name="milk" class="select-style">
                  <option value="whole">Whole</option>
                  <option value="skim">Skim</option>
                  <option value="almond">Almond</option>
                  <option value="oat">Oat</option>
                </select>
              </div>
            </div>

            <div>
              <img id="chapuchino" src="./assets/img/chapuchino.jpg" alt="Image 3" class="modal-image" />
              <div id="za-size">
                <label for="size">Select size:</label><br />
                <select id="size" name="size" class="select-style">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select><br />
                <label for="milk">Select milk:</label><br />
                <select id="milk" name="milk" class="select-style">
                  <option value="whole">Whole</option>
                  <option value="skim">Skim</option>
                  <option value="almond">Almond</option>
                  <option value="oat">Oat</option>
                </select>
              </div>

            </div><br />
            <div>

              <img id="iced-coffee" src="./assets/img/iced-coffee.jpg" alt="Image 4" class="modal-image" />
              <div id="za-size">
                <label for="size">Select size:</label><br />
                <select id="size" name="size" class="select-style">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select><br />
                <label for="milk">Select milk:</label><br />
                <select id="milk" name="milk" class="select-style">
                  <option value="whole">Whole</option>
                  <option value="skim">Skim</option>
                  <option value="almond">Almond</option>
                  <option value="oat">Oat</option>
                </select>
              </div>

            </div>

            <div>
              <img id="frappe" src="./assets/img/frappe.jpg" alt="Image 5" class="modal-image" />

              <div id="za-size">
                <label for="size">Select size:</label><br />
                <select id="size" name="size" class="select-style">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select><br />
                <label for="milk">Select milk:</label><br />
                <select id="milk" name="milk" class="select-style">
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
              <img id="late" src="./assets/img/late.jpg" alt="Image 6" class="modal-image" />
              <div id="za-size">
                <label for="size">Select size:</label><br />
                <select id="size" name="size" class="select-style">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select><br />
                <label for="milk">Select milk:</label><br />
                <select id="milk" name="milk" class="select-style">
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
        <div class="buttons">
          <button class="location">Find a Location</button>
        </div>
      </footer>




    </div>
  )
}
export default CoffeeLayout;