import styles from "./TotalOrders.module.css";
import React, { useState } from "react";

function TotalOrders() {
  const initialItems = [
    {
      product: "IR Sensor",
      name: "Beam Sensor Infra-Red TX - RX Sensing: 5 Meter",
      quantity: 10,
    },
    {
      product: "Timer",
      name: "Day-Night Delay Timer with Relay Output I Programmable Electronic Timer Switch 4 - Pin, 230 Volt AC",
      quantity: 5,
    },
    {
      product: "Ammeter",
      name: "VAF Display Meter 3 Phase 220VAC/440VAC I Make: Multispan",
      quantity: 2,
    },
    {
      product: "Temperature Controller",
      name: "TC-19 ( Fixed input, Single Display Temperature Controller) Manufactured by multispan",
      quantity: 5,
    },
    {
      product: "Indicator Light",
      name: "Buzzer 220VAC with Indicator - Pack of 3",
      quantity: 30,
    },
    {
      product: "Water-Level Controller",
      name: "Water Level Controller with 3 Level Sensor I Model: 4421AD1 GIC",
      quantity: 10,
    },
    {
      product: "Slot Sensor",
      name: "E3S-GS3E4 U-Shaped Sensor PNP NO+NC Output || Make : Omron",
      quantity: 100,
    },
  ];

  const [itemsToShow, setItemsToShow] = useState(2);

  const handleViewAllClick = () => {
    if (itemsToShow === 2) {
      setItemsToShow(initialItems.length);
    } else {
      setItemsToShow(2);
    }
  };

  return (
    <div className={styles.totalOrders}>
      <div className={`${styles.heading}`}>
        <h4>Total Orders</h4>
        <p>A summary of your orders</p>

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
        {initialItems.slice(0, itemsToShow).map((item, index) => (
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

export default TotalOrders;
