import DisplayMyOrder from "./DisplayMyOrder";
import styles from "./MyOrderPage.module.css"

function MyOrderPage() {
  const orderList = [
    {
      imageLink:
        "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/8-2.webp?fit=600%2C600&ssl=1",
      productName: "Rectangular Inductive Sensor Sn: 5mm II Make: DOLPHIN",
      description:
        "Inductive Sensor which detects all types of Metallic target. Sensor sensing range varies with Amount of Ferrous Content in Metal. Used for Positioning,aligning & Counting Applications.",
      price: "250",
      customerName: "Rakesh Sinha",
      quantity: 10,
    },
    {
      imageLink:
        "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1.webp?fit=600%2C600&ssl=1",
      productName:
        "M18 Photoelectric Sensor NPN-NC PLUG-IN Type Sensing: 1 Meter II Make: DOLPHIN",
      description:
        "M18 Photoelectric Sensor with IR(Infra-red) Lights helps in detection of any target that is opaque like Wood,Plastic,Rubber,Metal,Carbaord, etc.",
      price: "550",
      customerName: "Gaurav Arora",
      quantity: 10,
    },
    {
      imageLink:
        "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-20.webp?fit=600%2C600&ssl=1",
      productName:
        "Cyclic timer with unequal ON-OFF time + Relay Output, 6 time ranges",
      description:
        "Used for control application where ON time and Off time can be adjusted for controlling the load which can be AC/DC Load.",
      price: "600",
      customerName: "Swagat Sarkar",
      quantity: 2,
    },
    {
      imageLink:
        "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-28.webp?fit=600%2C600&ssl=1",
      productName:
        "Water Level Controller with 3 Level Sensor I Model: 4421AD1 GIC",
      description:
        "A single pole electrode used for level control in wells or storage tanks. It comprises of stainless steel Sensor with plastic holder and cable gland. A sealed ring and cable gland prevents liquid from entering the cable terminal connector and causing its oxidation.",
      price: "1,200",
      customerName: "Praful Dubey",
      quantity: 1,
    },
    {
      imageLink:
        "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/2-19.webp?fit=600%2C600&ssl=1",
      productName: "24VDC Relay OMRON MY2N-GS I 8 Pin Relay with Base",
      description:
        "DC relay is used to switch loads like Motor or used in Control wiring. It needs a control signal which is of 24VDC to trigger.",
      price: "350",
      customerName: "Sona Yadav",
      quantity: 20,
    },
    {
      imageLink:
        "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/5-1.webp?fit=600%2C600&ssl=1",
      productName: "Optical Fiber Amplifier Sensor E3X-NA41",
      description:
        "This Amplifier Converts the Light signal of Optical Fiber into Electrical signal which is a DC Signal which can be used to give to controller like PLC.",
      price: "1,800",
      customerName: "Pranav Mathur",
      quantity: 1,
    },
    {
      imageLink:
        "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/06/2-52.webp?fit=600%2C600&ssl=1",
      productName: "SMPS 24VDC LRS 100-24 Power Supply Rating: 4.5A Meanwell",
      description:
        "SMPS Provides 24VDC Supply to your DC load. SMPS is also available in different rating like 2.1A, 4.5A and 19.5A. It is preferred over normal Adaptor power supply in industrial applications.",
      price: "1,200",
      customerName: "Narendra Modi",
      quantity: 5,
    },
    {
      imageLink:
        "https://i0.wp.com/made2automate.com/wp-content/uploads/2023/05/1-16.webp?fit=600%2C600&ssl=1",
      productName: "AC Contactor 3 Pole Rating: 32A I Make: SIBASS",
      description:
        "AC contactor is used to switch heavy loads like Motor,AC or Heater. It needs a control signal which is of 220VAC to trigger.",
      price: "500",
      customerName: "Rohit Banarjee",
      quantity: 4,
    },
  ];
  return (
    <>
      <h1>Your Orders</h1>

      {orderList.map((order, index) => (
        <DisplayMyOrder key={index} order={order} />
      ))}
    </>
  );
}

export default MyOrderPage;