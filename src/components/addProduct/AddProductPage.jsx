import React, { useState, useRef } from "react";
import "./AddProductFrom.css";
import { Link, useHref } from "react-router-dom";

function AddProductPage() {
  const Name = useRef();
  const Image = useRef();
  const Id = useRef();
  const Manufacturer = useRef();
  const Product = useRef();
  const Quality = useRef();
  const Category = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productImage">Upload Product Image:</label>
        <input
          type="file"
          id="productImage"
          name="productImage"
          accept="image/*"
          ref={Image}
        />

        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          name="productName"
          ref={Name}
        />

        <label htmlFor="productID">Product ID:</label>
        <input
          ref={Id}
          type="text"
          id="productID"
          name="productID"
        />

        <label htmlFor="manufacturerName">Manufacturer Name:</label>
        <input
        ref={Manufacturer}
          type="text"
          id="manufacturerName"
          name="manufacturerName"
        />

        <label htmlFor="productDescription">Product Description:</label>
        <input
        ref={Product}
          type="text"
          id="productDescription"
          name="productDescription"
        />

        <label htmlFor="productQuantity">Product Quantity:</label>
        <input
        ref={Quality}
          type="number"
          id="productQuantity"
          name="productQuantity"
        />

        <label htmlFor="category">Select Category:</label>
        <select id="category" name="category" ref={Category}>
          <option value="newStock">New Stock</option>
          <option value="oldStock">Old Stock</option>
        </select>
        <Link to="barcode">
        <button type="submit">
       
          Add Products
       
        </button>
        </Link>
      </form>
    </>
  );
}

export default AddProductPage;
