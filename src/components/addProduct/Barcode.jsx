import { LuCheckCircle } from "react-icons/lu";
import styles from "./Barcode.module.css";

function Barcode({
  productName,
  productImage,
  productId,
  productManufacturer,
  productDescription,
  productQuantity,
  productCategory,
}) {
  return (
    <>
    <h1>Barcode</h1>

      <div className={styles.success}>
        <p className={styles.successMsg}>
          <img className={styles.img} src="/src/assets/success.png" />
          Product Added Successfully 
        </p>
      </div>

      

    </>
  );
}

export default Barcode;
