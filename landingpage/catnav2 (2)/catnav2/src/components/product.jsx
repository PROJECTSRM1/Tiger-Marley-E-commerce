import React, { useState, useRef } from "react";
import "./product.css";

const ProductDetail = () => {
  // ---------- States ----------
  const [quantity, setQuantity] = useState(1);
  const [tag, setTag] = useState("none");
  const [selectedImage, setSelectedImage] = useState("/images/1.jpg");
  const [showDescription, setShowDescription] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const thumbnailRef = useRef(null);

  // ---------- Product Data ----------
  const product = {
    name: "WRANGLER BACKPACK",
    price: 12000,
    description:
      "Experience the perfect blend of style and durability with this premium leather backpack. Ideal for everyday adventures or your next trip.",
    images: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg",
      "/images/6.jpg",
      "/images/7.jpg",
      "/images/8.jpg",
    ],
  };

  // ---------- Functions ----------
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleScroll = (direction) => {
    if (thumbnailRef.current) {
      const scrollAmount = 100;
      thumbnailRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="page-container">
      <div className="product-detail">
        {/* ---------- Left Section (Images) ---------- */}
        <div className="image-section">
          <img className="main-image" src={selectedImage} alt={product.name} />

          <div className="thumbnail-container">
            <button className="arrow left" onClick={() => handleScroll("left")}>
              &#10094;
            </button>

            <div className="thumbnail-scroll" ref={thumbnailRef}>
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={`thumbnail ${
                    selectedImage === img ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>

            <button
              className="arrow right"
              onClick={() => handleScroll("right")}
            >
              &#10095;
            </button>
          </div>
        </div>

        {/* ---------- Right Section (Details) ---------- */}
        <div className="details-section">
          <h2 className="product-name">{product.name}</h2>
          <p className="price">₹ {product.price.toLocaleString()}</p>

          {/* Quantity Box */}
          <div className="quantity-box">
            <button className="qty-btn" onClick={handleDecrease}>
              –
            </button>
            <span className="qty-number">{quantity}</span>
            <button className="qty-btn" onClick={handleIncrease}>
              +
            </button>
          </div>

          {/* Personalize Tag Name */}
          <div className="personalize">
            <h4>PERSONALIZE TAG NAME</h4>
            <div className="personalize-options-horizontal">
              <label>
                <input
                  type="radio"
                  name="tag"
                  value="gold"
                  checked={tag === "gold"}
                  onChange={() => setTag("gold")}
                />
                <span className="tag-label-text">
                  GOLD <span className="price-tag">₹300</span>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="tag"
                  value="silver"
                  checked={tag === "silver"}
                  onChange={() => setTag("silver")}
                />
                <span className="tag-label-text">
                  SILVER <span className="price-tag">₹300</span>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="tag"
                  value="plain"
                  checked={tag === "plain"}
                  onChange={() => setTag("plain")}
                />
                <span className="tag-label-text">
                  PLAIN <span className="price-tag">₹300</span>
                </span>
              </label>
              <label>
                <input
                  type="radio"
                  name="tag"
                  value="none"
                  checked={tag === "none"}
                  onChange={() => setTag("none")}
                />
                <span className="tag-label-text">NO</span>
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="buttons">
            <button className="add-to-cart">ADD TO CART</button>
            <button className="buy-now">BUY IT NOW</button>
          </div>

          {/* ✅ Wishlist Toggle */}
          <p
            className={`wishlist ${isWishlisted ? "wishlisted" : ""}`}
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            {isWishlisted ? "❤️ WISHLISTED" : "♡ ADD TO WISHLIST"}
          </p>

          {/* ✅ Description Toggle */}
          <div className="description-section">
            <div
              className="description-header"
              onClick={() => setShowDescription(!showDescription)}
            >
              <h4>DESCRIPTION</h4>
              <span className="toggle-symbol">
                {showDescription ? "–" : "+"}
              </span>
            </div>

            {showDescription && (
              <p className="description-text">{product.description}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
