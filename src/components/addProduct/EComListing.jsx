import styles from "./EComListing.module.css";
import { MdCloudUpload } from "react-icons/md";

function EComListing() {
  const productName = "AC Contactor 3 Pole Rating: 32A I Make: SIBASS";
  const productId = "IKS-1348";
  const productManufacturer = "Tata";
  const productDescription =
    "AC contactor is used to switch heavy loads like Motor,AC or Heater. It needs a control signal which is of 220VAC to trigger.";
  const productQuantity = 2;
  const productCategory = "New Stock";
  const productPrice = "300";

  return (
    <>
      <h1>E-Commerce Listing</h1>


      <div className={styles.outerDiv}>
        <img
          src="/src/assets/made2automate.ico"
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
