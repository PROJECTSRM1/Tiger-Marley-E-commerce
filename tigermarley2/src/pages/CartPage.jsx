import React, { useState } from "react";
import "./CartPage.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "THE MONEY MAKER",
      color: "BLACK",
      price: 8750,
      qty: 1,
      img: "cart1.jpg"
    },
    {
      id: 2,
      name: "THE WORK HORSE",
      color: "BROWN",
      price: 9450,
      qty: 1,
      img: "cart2.jpg"
    }
  ]);

  const [showOffers, setShowOffers] = useState(false);
  const [discountCode, setDiscountCode] = useState("");

  const offersList = [
    { code: "LEGEND10", desc: "Get 10% Off on All Orders" },
    { code: "LUCKY5", desc: "Get 5% off on selected products" },
    { code: "SAVE5", desc: "Get 5% off on your first order" },
    { code: "FLAT200", desc: "Get ₹200 off on your first order" },
  ];

  const updateQuantity = (id, type) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "increase"
                  ? item.qty + 1
                  : item.qty > 1
                  ? item.qty - 1
                  : 1,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleOfferClick = (code) => {
    setDiscountCode(code);
    navigator.clipboard.writeText(code);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h2 className="cart-title">CART</h2>

      <div className="cart-header">
        <span>PRODUCT</span>
        <span>QUANTITY</span>
        <span>TOTAL</span>
      </div>

      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <div className="cart-product">
            <img src={item.img} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p className="price">₹ {item.price.toLocaleString()}</p>
              <p className="color">{item.color}</p>
            </div>
          </div>

          <div className="cart-qty-wrapper">
            <div className="cart-qty">
              <button onClick={() => updateQuantity(item.id, "decrease")}>–</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQuantity(item.id, "increase")}>+</button>
            </div>
            <span className="remove" onClick={() => removeItem(item.id)}>
              Remove
            </span>
          </div>

          <div className="cart-total">₹ {(item.price * item.qty).toLocaleString()}</div>
        </div>
      ))}

      <div className="cart-lower">
        <div className="order-note">
          <label>Add order note</label>
          <textarea placeholder="How can we help you?" />
        </div>

        {/* ---------- Discount + Offers Section ---------- */}
        <div className="discount-section">
          {/* Show Offers Dropdown */}
          <div className="show-offers" onClick={() => setShowOffers(!showOffers)}>
            <span className="offers-title">
              <i className="fa-solid fa-percent"></i> Show Offers
            </span>
            <span className={`arrow ${showOffers ? "up" : "down"}`}>▲</span>
          </div>

          {showOffers && (
            <div className="offers-dropdown">
              {offersList.map((offer, index) => (
                <div key={index} className="offer-item">
                  <div className="offer-icon">
                    <i className="fa-solid fa-percent"></i>
                  </div>
                  <div className="offer-details">
                    <p>{offer.desc}</p>
                  </div>
                  <div
                    className="offer-code"
                    onClick={() => handleOfferClick(offer.code)}
                    title="Click to apply & copy code"
                  >
                    {offer.code}
                    <i className="fa-regular fa-copy"></i>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Discount Input */}
          <div className="discount-input">
            <input
              type="text"
              placeholder="Discount code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button>APPLY</button>
          </div>

          <p className="total">
            Total: <strong>₹ {total.toLocaleString()}</strong>
          </p>
          <p className="tax-note">
            Tax included and shipping calculated at checkout
          </p>

          <button className="checkout-btn">CHECKOUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
