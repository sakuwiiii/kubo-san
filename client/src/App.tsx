import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [productName, setProductName] = useState("");
  const [categoryId, setCategeoryId] = useState("");
  const [supplierId, setSupplierId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const submitFunction = async () => {
    try {
      await axios.post("http://localhost:3000", {
        productName,
        categoryId,
        supplierId,
        quantity,
        price,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>Add New Products</h1>
      <form onSubmit={submitFunction}>
        <label htmlFor="product_name">Product Name:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => {
            setProductName(e.target.value);
          }}
          id="product_name"
          name="product_name"
          required
        />

        <label htmlFor="category_id">Category ID:</label>
        <input
          type="number"
          value={categoryId}
          onChange={(e) => {
            setCategeoryId(e.target.value);
          }}
          id="category_id"
          name="category_id"
          required
        />

        <label htmlFor="supplier_id">Supplier ID:</label>
        <input
          type="number"
          value={supplierId}
          onChange={(e) => {
            setSupplierId(e.target.value);
          }}
          id="supplier_id"
          name="supplier_id"
          required
        />

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          id="quantity"
          name="quantity"
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          id="price"
          name="price"
          step="0.01"
          required
        />

        <button type="submit">Add Product</button>
      </form>
    </>
  );
}

export default App;
