import styles from "./DisplayMyOrder.module.css"
import { TbRefreshDot } from "react-icons/tb";
import { TbListDetails } from "react-icons/tb";

function DisplayMyOrder({ order }) {
  return (
    <div className={styles.outerDiv}>
      <img
        src={order.imageLink}
        alt={order.productName}
        className={styles.img}
      />

      <div className={styles.desc}>
        <p className={styles.name}>{order.productName}</p>
        <p className={styles.paraBlock}>{order.description}</p>

        <div className={styles.detailDiv}>
          <p className={styles.price}>
            Price:<span> ₹{order.price}</span>
          </p>
          <p className={styles.cName}>
            Customer Name: <span>{order.customerName}</span>
          </p>
          <p className={styles.qty}>{order.quantity} pieces</p>
        </div>

        <div className={styles.btns}>
          <button type="button" className={`btn btn-primary ${styles.btnInside}`}>
            <TbRefreshDot />
            Order Again
          </button>
          <button type="button" className={`btn btn-primary ${styles.btnInside}`}>
            <TbListDetails />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default DisplayMyOrder;