import React, { useState } from "react";
import { Button } from "reactstrap";
import "../App.css"; // استيراد ملف CSS المخصص

const Order = () => {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [orderSummary, setOrderSummary] = useState([]);

  const addItem = () => {
    if (!itemName || !itemPrice || !itemQuantity) {
      alert("Please fill in all fields!");
      return;
    }

    const newItem = {
      name: itemName,
      price: parseFloat(itemPrice),
      quantity: parseInt(itemQuantity),
    };

    setItems((prev) => [...prev, newItem]);
    setItemName("");
    setItemPrice("");
    setItemQuantity("");
  };

  const calculateTotal = () => {
    const summary = items.map((item) => ({
      name: item.name,
      total: (item.price * item.quantity).toFixed(2),
    }));

    setOrderSummary(summary);
  };

  return (
    <div className="order-container">
      <h1 className="order-title">Place Your Order</h1>
      <div className="form-container">
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Price (e.g., 2.5)"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
          className="input-field"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          className="input-field"
        />
        <Button color="dark" outline onClick={addItem} className="add-item-btn">
          Add Item
        </Button>
      </div>

      <div className="items-list">
        <h2>Items Added:</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.quantity} x {item.name} @ {item.price.toFixed(2)} SAR each
            </li>
          ))}
        </ul>
      </div>

      <Button onClick={calculateTotal} className="calculate-btn">
        Calculate Total
      </Button>

      {orderSummary.length > 0 && (
        <div className="order-summary">
          <h2>Order Summary:</h2>
          <ul>
            {orderSummary.map((item, index) => (
              <li key={index}>
                {item.name}: {item.total} SAR
              </li>
            ))}
          </ul>
          <h3>
            Grand Total:{" "}
            {orderSummary
              .reduce((total, item) => total + parseFloat(item.total), 0)
              .toFixed(2)}{" "}
            SAR
          </h3>
        </div>
      )}
    </div>
  );
};

export default Order;
