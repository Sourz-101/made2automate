import { LuCheckCircle } from "react-icons/lu";
import styles from "./Barcode.module.css";
import { FaPrint } from "react-icons/fa";
import { FaSave } from "react-icons/fa";

function Barcode({
  productName,
  productImage,
  productId,
  productManufacturer,
  productDescription,
  productQuantity,
  productCategory,
  productPrice,
}) {
  productName = "AC Contactor 3 Pole Rating: 32A I Make: SIBASS";
  productImage;
  productId = "IKS-1348";
  productManufacturer = "Tata";
  productDescription =
    "AC contactor is used to switch heavy loads like Motor,AC or Heater. It needs a control signal which is of 220VAC to trigger.";
  productQuantity = 2;
  productCategory = "New Stock";
  productPrice = "300";
  return (
    <>
      <h1>Barcode</h1>

      <div className={styles.success}>
        <p className={styles.successMsg}>
          <img className={styles.img} src="/src/assets/success.png" />
          Product Added Successfully
        </p>
      </div>

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
              Catefory: <span>{productCategory}</span>
            </p>
          </div>
        </div>
      </div>

      {/*  */}

      {/* <div className={styles.barcodeDiv}>

        <img className={styles.barcodeImg} src="/src/assets/barcode.png" />

        <div className={styles.btns}>
          <button
            type="button"
            className={`btn btn-primary ${styles.btnInside}`}
          >
            <FaPrint />
            Print Barcode
          </button>
          <button
            type="button"
            className={`btn btn-primary ${styles.btnInside}`}
          >
            <FaSave />
            Save to device
          </button>
        </div>

      </div> */}

      <div className={styles.barcodeDiv}>

      <img className={styles.barcodeImg} src="/src/assets/barcode.png" />

      <div>
        <button></button>
        <br/>
        <button></button>
      </div>

      </div>



    </>
  );
}

export default Barcode;
