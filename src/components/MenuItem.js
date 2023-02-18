const MenuItem = (props) => {
  const item = props.item
  return (
    <>
      <div>
        <abbr title={item.name}><img id="americano" src={item.imgSrc} alt={item.name} className="modal-image" /></abbr>
        {/*
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
      */}
      </div>
    </>
  )

};
export default MenuItem;