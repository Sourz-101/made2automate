import styles from "./CardData.module.css";

function CardData() {
  return (
    <div className={`${styles.CardData}`}>
      <div className={`${styles.box} total-orders`}>
        <span className={`fs-1 fw-bolder ${styles.data1}`}>112</span>
        <p>Total Orders</p>
      </div>

      <div className={`${styles.box} new-stocks`}>
        <span className={`fs-1 fw-bolder sp1 ${styles.data2}`}>152</span>
        <p>New Stocks</p>
      </div>

      <div className={`${styles.box} dead-stocks`}>
        <span className={`fs-1 fw-bolder sp1 ${styles.data3}`}>100</span>
        <p>Dead Stocks</p>
      </div>

      <div className={`${styles.box} total-leads`}>
        <span className={`fs-1 fw-bolder sp1 ${styles.data4}`}>25</span>
        <p>Total Leads</p>
      </div>

      <div className={`${styles.box} total-revenue`}>
        <span className={`fs-2 fw-bolder sp1 ${styles.data5}`}>111,200</span>
        <p>Total Revenue</p>
      </div>
    </div>
  );
}

export default CardData;

