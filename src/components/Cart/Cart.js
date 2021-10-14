import React, { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const handleCartClear = () => {
    setCart([]);
  };
  const handleCartRemove = (newcourse) => {
    const newCart = cart.filter((course) => course.key !== newcourse.key);
    setCart(newCart);
  };
  const removeIcon = (
    <FontAwesomeIcon icon={faWindowClose} className="text-danger fs-2" />
  );
  let total = 0;
  for (const course of cart) {
    total += course.price;
  }
  return (
    <section className="p-3 text-center">
      <h5>Courses Selected: {cart?.length}</h5>
      <p className="mb-4">Total Course fee : ${total}.00</p>
      <article>
        {cart.map((item) => (
          <div className="d-flex  m-1 p-1">
            <div className="d-flex border border-1 rounded border-secondary mx-auto w-75">
              <div style={{ width: "80px", height: "60px" }}>
                <img src={item.img} alt="" className="img-fluid h-100 w-100" />
              </div>
              <div>
                <p className="ms-3 lh-sm m-0 text-wrap">
                  {item.title} <br />{" "}
                  <small className="text-danger">${item.price}.00</small>
                </p>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleCartRemove(item)}
                className="btn border border-0"
              >
                {removeIcon}
              </button>
            </div>
          </div>
        ))}
      </article>
      <button
        onClick={handleCartClear}
        className="btn btnColor text-white mt-2"
      >
        Clear
      </button>
    </section>
  );
};

export default Cart;
