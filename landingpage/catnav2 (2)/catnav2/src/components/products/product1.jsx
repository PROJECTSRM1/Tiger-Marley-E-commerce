import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
// import products from "../../data/products";
import "./product1.css";

const ProductDetail1 = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [addedToCart, setAddedToCart] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);
  const [tag, setTag] = useState("none");
  const thumbnailRef = useRef(null);

  const handleScroll = (direction) => {
    if (thumbnailRef.current) {
      const scrollAmount = 100;
      thumbnailRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // ✅ Quantity Handlers
  const handleIncrease = () => setQuantity((q) => q + 1);
  const handleDecrease = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // ✅ Add to Cart
  const handleAddToCart = () => {
    setAddedToCart(true);
    alert(`${product.name} added to cart!`);
  };

  // ✅ Wishlist Toggle
  const handleWishlist = () => {
    setWishlisted((prev) => !prev);
  };

  return (
    <div className="product-detail">
      {/* ---------- Image Section ---------- */}
      <div className="image-section">
        <img className="main-image" src={selectedImage} alt={product.name} />
      </div>

      {/* ---------- Details Section ---------- */}
      <div className="details-section">
        <h2>{product.name}</h2>
        <p className="price">₹ {product.price.toLocaleString()}</p>

        {/* ---------- Quantity Box ---------- */}
        <div className="quantity-box">
          <button className="qty-btn" onClick={handleDecrease}>–</button>
          <span className="qty-number">{quantity}</span>
          <button className="qty-btn" onClick={handleIncrease}>+</button>
        </div>

        {/* ---------- Personalize Section ---------- */}
        <div className="personalize">
          <h4>PERSONALIZE TAG NAME</h4>
          <div className="personalize-options">
            <label>
              <input
                type="radio"
                name="tag"
                value="gold"
                checked={tag === "gold"}
                onChange={() => setTag("gold")}
              />{" "}
              GOLD ₹300
            </label>
            <label>
              <input
                type="radio"
                name="tag"
                value="silver"
                checked={tag === "silver"}
                onChange={() => setTag("silver")}
              />{" "}
              SILVER ₹300
            </label>
            <label>
              <input
                type="radio"
                name="tag"
                value="plain"
                checked={tag === "plain"}
                onChange={() => setTag("plain")}
              />{" "}
              PLAIN ₹300
            </label>
            <label>
              <input
                type="radio"
                name="tag"
                value="none"
                checked={tag === "none"}
                onChange={() => setTag("none")}
              />{" "}
              NO
            </label>
          </div>
        </div>

        {/* ---------- Buttons ---------- */}
        <div className="buttons">
          <button onClick={handleAddToCart}>
            {addedToCart ? "✅ ADDED" : "ADD TO CART"}
          </button>
          <button className="buy-now" onClick={() => alert("Buy Now clicked!")}>
            BUY IT NOW
          </button>
        </div>

        {/* ---------- Wishlist ---------- */}
        <button className="add-wishlist" onClick={handleWishlist}>
          {wishlisted ? "❤️ WISHLISTED" : "♡ ADD TO WISHLIST"}
        </button>

        {/* ---------- Description ---------- */}
        <div className="description-section">
          <h4>DESCRIPTION</h4>
          <p>A premium handcrafted product with quality materials.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail1;
