import { useContext } from "react";
import styles from "./EComListing.module.css";
import { MdCloudUpload } from "react-icons/md";
import { ProductData } from "../../store/add-product-store";

function EComListing() {

  const { data } = useContext(ProductData);

  const {
    productName,
    productId,
    productManufacturer,
    productDescription,
    productQuantity,
    productCategory,
    productPrice,
  } = data;

  return (
    <>
      <h1 className={styles.h1}>E-Commerce Listing</h1>


      <div className={styles.outerDiv}>
        <img
          src="https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-16.webp?fit=600%2C600&ssl=1"
          alt={productName}
          className={styles.productImg}
        />

        <div className={styles.desc}>
          <p className={styles.name}>{productName}</p>
          <p className={styles.paraBlock}>{productDescription}</p>

          <div className={styles.divAligner}>
            <p>
              Manufacturer: <span>{productManufacturer}</span>
            </p>
            <p>
              Product Id: <span>{productId}</span>
            </p>
          </div>

          <div className={styles.divAligner}>
            <p>
              Price(Per Unit): <span>{productPrice}</span>
            </p>
            <p>
              Quantity: <span>{productQuantity}</span>
            </p>
            <p>
              Cateory: <span>{productCategory}</span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.listForECom}>
      <h5 className={styles.EHeading}>E-Commerce Listing</h5>
        <div className={styles.website}>
            <p>Amazon</p>
            <button className={`btn btn-primary ${styles.btnInside}`}><MdCloudUpload />Upload</button>
        </div>
        <div className={styles.website}>
            <p>Flipkart</p>
            <button className={`btn btn-primary ${styles.btnInside}`}><MdCloudUpload />Upload</button>
        </div>
        <div className={styles.website}>
            <p>Indiamart</p>
            <button className={`btn btn-primary ${styles.btnInside}`}><MdCloudUpload />Upload</button>
        </div>
        <div className={styles.website}>
            <p>Website</p>
            <button className={`btn btn-primary ${styles.btnInside}`}><MdCloudUpload />Upload</button>
        </div>
      </div>
    </>
  );
}

export default EComListing;
