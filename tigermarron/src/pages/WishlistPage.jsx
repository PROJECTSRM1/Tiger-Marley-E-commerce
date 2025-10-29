import React, { useState, useEffect } from "react";
import "./WishlistPage.css";

// --- Product Data ---
const initialProducts = [
  {
    id: 1,
    name: "CANTLE SKY",
    price: 6750.0,
    // date: "17 Oct 2025",
    imageUrl: "https://www.tigermarron.com/cdn/shop/files/1a_757ae3d5-8950-4d93-991c-3e48040cf4dd.jpg?v=1754133394&width=700",
  },
  {
    id: 2,
    name: "MIDAS FLOWER",
    price: 3000.0,
    // date: "17 Oct 2025",
    imageUrl: "https://www.tigermarron.com/cdn/shop/files/00.jpg?v=1758789407&width=700",
  },
  {
    id: 3,
    name: "IGNITION",
    price: 3000.0,
    // date: "17 Oct 2025",
    imageUrl: "https://www.tigermarron.com/cdn/shop/products/TMACC-034-1.jpg?v=1750006700&width=700",
  },
  {
    id: 4,
    name: "SELLE FRANÇAIS",
    price: 6000.0,
    // date: "17 Oct 2025",
    imageUrl: "https://www.tigermarron.com/cdn/shop/files/093A5982_ca7a0473-771a-4fcc-a1de-a3a23c00921f.jpg?v=1746174421&width=700",
  },
  {
    id: 5,
    name: "RANCHO WALLET",
    price: 4500.0,
    // date: "17 Oct 2025",
    imageUrl: "https://www.tigermarron.com/cdn/shop/files/6changed_1.jpg?v=1754133351&width=700",
  },
  {
    id: 6,
    name: "THE MONEY MAKER",
    price: 2500.0,
    // date: "17 Oct 2025",
    imageUrl: "https://www.tigermarron.com/cdn/shop/products/TMMBG-026-4.jpg?v=1750006713&width=700",
  },
  {
    id: 7,
    name: "CHA CHING",
    price: 1800.0,
    // date: "17 Oct 2025",
    imageUrl: "https://www.tigermarron.com/cdn/shop/products/TMMWT-060-1.jpg?v=1750006681&width=600",
  },
  {
    id: 8,
    name: "CATCHING FLIGHTS",
    price: 5200.0,
    // date: "17 Oct 2025",
    imageUrl: "https://www.tigermarron.com/cdn/shop/products/TMACC-035-1.jpg?v=1750006701&width=700",
  },
];

// --- Confirmation Modal ---
const ConfirmationModal = ({ isOpen, onClose, onConfirm, product }) => {
  if (!isOpen || !product) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <div className="modal-header-flex">
          <div className="modal-icon-title">
            <span className="modal-icon">⚠️</span>
            <h3 className="modal-title">Confirm Deletion</h3>
          </div>
          <button onClick={onClose} className="modal-close-btn">
            ✖
          </button>
        </div>
        <p className="modal-body">
          Are you sure you want to remove{" "}
          <span className="highlight">{product.name}</span> from your wishlist?
          This action cannot be undone.
        </p>
        <div className="modal-confirm-btn-flex">
          <button onClick={onClose} className="modal-cancel-btn">
            Cancel
          </button>
          <button onClick={onConfirm} className="modal-delete-btn">
            Yes, Delete it
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Notification ---
const Notification = ({ message, type, onClose }) => {
  if (!message) return null;

  return (
    <div
      className={`notification-bar ${
        type === "success" ? "notification-success" : "notification-info"
      }`}
    >
      <span>{type === "success" ? "✅" : "🛒"}</span>
      <span className="notification-message">{message}</span>
      <button onClick={onClose} className="notification-close">
        ✖
      </button>
    </div>
  );
};

// --- Main Component ---
const Wishlist = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [notification, setNotification] = useState({ message: "", type: "" });

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(
        () => setNotification({ message: "", type: "" }),
        3000
      );
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleAddToCart = (product) => {
    setNotification({ message: `${product.name} added to cart!`, type: "info" });
  };

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (productToDelete) {
      setProducts((prev) => prev.filter((p) => p.id !== productToDelete.id));
      setNotification({
        message: `${productToDelete.name} deleted successfully.`,
        type: "success",
      });
    }
    setIsModalOpen(false);
    setProductToDelete(null);
  };

  return (
    <div className="app-container">
      <h1 className="main-title">My Wishlist</h1>

      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-details">
                <p className="product-name">{product.name}</p>
                <p className="product-date">{product.date}</p>
              </div>

              <div className="product-image-wrapper">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              <div className="product-price-section">
                <p className="product-price">₹{product.price.toFixed(2)}</p>
                <div className="actions-flex">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="add-to-cart-btn"
                  >
                    🛒 Add to Cart
                  </button>
                  <button
                    onClick={() => handleDeleteClick(product)}
                    className="delete-btn"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-message">
            <h2 className="empty-title">Your Wishlist is Empty!</h2>
            <p className="empty-text">Time to find some new favorites.</p>
          </div>
        )}
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        product={productToDelete}
      />

      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "" })}
      />
    </div>
  );
};

export default Wishlist;
