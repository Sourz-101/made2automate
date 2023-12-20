import { useState } from "react";
import styles from "./CardTemplate.module.css";

function CardTemplate({ listHeading, listItem }) {
  const [itemsToShow, setItemsToShow] = useState(2);

  const handleViewAllClick = () => {
    if (itemsToShow === 2) {
      setItemsToShow(listItem.length);
    } else {
      setItemsToShow(2);
    }
  };

  return (
    <div className={styles.totalLeads}>
      <div className={`${styles.heading}`}>
        <h4>{listHeading}</h4>
        <p>A summary of your {listHeading}</p>

        <div>
          <button
            onClick={handleViewAllClick}
            className={`btn btn-primary ${styles.viewBtn}`}
          >
            View All
          </button>
        </div>
      </div>

      <ul className={`list-group`}>
        {listItem.slice(0, itemsToShow).map((item, index) => (
          <li className={`${styles.listItem} list-group-item`} key={index}>
            <p className={`fs-4 text fw-semibold ${styles.product}`}>
              {item.product}
            </p>
            <p className={styles.name}>{item.name}</p>
            Quantity: <span className={styles.quantity}>
              {item.quantity}
            </span>{" "}
            Pieces
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardTemplate;
