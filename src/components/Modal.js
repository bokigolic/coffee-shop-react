import MenuItem from "./MenuItem";

const Modal = (props) => {
  const opened = props.opened;
  const toggleModalOpened = props.toggleModalOpened


  const menuData = [
    {
      id: 1,
      name: "Americano",
      imgSrc: "./assets/img/americano.jpg"
    },
    {
      id: 2,
      name: "Coffee house",
      imgSrc: "./assets/img/esspresso.jpg"
    },
    {
      id: 3,
      name: "Cappucino",
      imgSrc: "./assets/img/chapuchino.jpg"
    },
    {
      id: 4,
      name: "Iced Coffee",
      imgSrc: "./assets/img/iced-coffee.jpg"
    },
    {
      id: 5,
      name: "Frape",
      imgSrc: "./assets/img/frappe.jpg"
    },
    {
      id: 6,
      name: "Latte",
      imgSrc: "./assets/img/late.jpg"
    }

  ]


  return (
    <>
      <div id="modal" className={opened ? "modal opened" : "modal"}>
        <div className="modal-content">
          <span onClick={toggleModalOpened} className="close">&times;</span>

          {
            menuData.map((item) => {
              return <MenuItem key={item.id} item={item} />
            })
          }

        </div>
      </div>
    </>
  )
};
export default Modal;