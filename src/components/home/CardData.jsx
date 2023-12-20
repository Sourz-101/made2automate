import { useState } from "react";
import styles from "./CardData.module.css";

function CardData() {

  const [totalOrder, setTotalOrder]= useState(112)
  const [newStock, setNewStock]= useState(153)
  const [deadStock, setDeadStock]= useState(99)
  const [totalLead, setTotalLead]= useState(25)
  const [totalRevenue, setTotalRevenue]= useState(121221)

  

  return (
    <div className={`${styles.CardData}`}>
      <div className={`${styles.box} total-orders`}>
        <span className={`${styles.data1} ${styles.data}`}>{totalOrder}</span>
        <p className={styles.para}>Total Orders</p>
      </div>

      <div className={`${styles.box} new-stocks`}>
        <span className={`${styles.data2} ${styles.data}`}>{newStock}</span>
        <p className={styles.para} >New Stocks</p>
      </div>

      <div className={`${styles.box} dead-stocks`}>
        <span className={`${styles.data3} ${styles.data}`}>{deadStock}</span>
        <p className={styles.para}>Dead Stocks</p>
      </div>

      <div className={`${styles.box} total-leads`}>
        <span className={`${styles.data4} ${styles.data}`}>{totalLead}</span>
        <p className={styles.para}>Total Leads</p>
      </div>

      <div className={`${styles.box} total-revenue`}>
        <span className={`${styles.data5}`}>{totalRevenue.toLocaleString()}</span>
        <p className={styles.para}>Total Revenue</p>
      </div>
    </div>
  );
}

export default CardData;

