import { IoMdAddCircle } from "react-icons/io";
import styles from "./AddProduct.module.css";
import { Link } from "react-router-dom";

function AddProduct() {
  return (
    <>
      <button
        type="button"
        className={`btn btn-primary btn-lg ${styles.addButton} ${styles.buttonClass}`}
      >
        <Link to="add-product-page" className={styles.btnText}>
          Add Products
        </Link>
        <IoMdAddCircle />
      </button>
    </>
  );
}

export default AddProduct;
