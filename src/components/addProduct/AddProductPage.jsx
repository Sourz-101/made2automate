import React, { useState, useRef, useContext } from "react";
import { Link, redirect, useHref } from "react-router-dom";
import styles from "./AddProductPage.module.css";
import { ProductData } from "../../store/add-product-store";

function AddProductPage() {
  const Name = useRef();
  const Image = useRef();
  const Id = useRef();
  const Manufacturer = useRef();
  const Product = useRef();
  const Quantity = useRef();
  const Category = useRef();
  const Price = useRef();

  const { updateData } = useContext(ProductData);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();


    const productImage = Image.current.value;
    const productName = Name.current.value;
    const productId = Id.current.value;
    const productManufacturer = Manufacturer.current.value;
    const productDescription = Product.current.value;
    const productQuantity = Quantity.current.value;
    const productCategory = Category.current.value;
    const productPrice = Price.current.value;

    const newProductData = {
      productImage,
      productName,
      productId,
      productManufacturer,
      productDescription,
      productQuantity,
      productCategory,
      productPrice,
    };
    updateData(newProductData);
    // window.location.href = "/add-product-page/barcode";
    setButtonVisible(false);
  };

  return (
    <div className={styles.outerDiv}>
      <h1 className={styles.h1}>Add Product</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="productImage">Upload Product Image:</label>
        <input
          type="file"
          id="productImage"
          name="productImage"
          accept="image/*"
          ref={Image}
          className={styles.input}
        />

        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="productName" name="productName" ref={Name} />

        <label htmlFor="productDescription">Product Description:</label>
        <input
          ref={Product}
          type="text"
          id="productDescription"
          name="productDescription"
        />

        <label htmlFor="manufacturerName">Manufacturer Name:</label>
        <input
          ref={Manufacturer}
          type="text"
          id="manufacturerName"
          name="manufacturerName"
        />

        <label htmlFor="productID">Product ID:</label>
        <input ref={Id} type="text" id="productID" name="productID" />

        <label htmlFor="productQuantity">Product Quantity:</label>
        <input
          ref={Quantity}
          type="number"
          id="productQuantity"
          name="productQuantity"
        />

        {/*  */}
        <label htmlFor="productPrice">Product Price(Per Piece):</label>
        <input
          ref={Price}
          placeholder="₹"
          type="number"
          id="productQuantity"
          name="productQuantity"
        />

        <label htmlFor="category">Select Category:</label>
        <select id="category" name="category" ref={Category}>
          <option value="newStock">New Stock</option>
          <option value="oldStock">Old Stock</option>
        </select>

        {/* <Link to="barcode">
        <button type="submit" className={styles.submitButton}>
          Add Products
        </button>
        </Link> */}



        {buttonVisible && <button type="submit" className={styles.submitButton}>
          Add Products
        </button>}


        {!buttonVisible && <Link to="barcode">
        <button type="link" className={styles.submitButton}>
         next
        </button>        
        </Link>}

      </form>
    </div>
  );
}

export default AddProductPage;
