import { IoMdAddCircle } from "react-icons/io";
import styles from "./AddProduct.module.css";

function AddProduct() {
  return (
    <>
      <button
        type="button"
        className={`btn btn-primary btn-lg ${styles.addButton} ${styles.buttonClass}`}
      >
        Add Products
        <IoMdAddCircle />
      </button>
    </>
  );
}

export default AddProduct;
