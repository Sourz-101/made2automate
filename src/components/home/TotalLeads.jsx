import CardTemplate from "./CardTemplate";

function TotalLeads() {
  const initialItems = [
    {
      product: "Puneet Agarval",
      name: "The price of slot sensor is 0. What is delivery charge???",
      quantity: 10,
    },
    {
      product: "Disha Chaudhary",
      name: "What is the lifetime for the water level controller. Can I use it for my water tank to measure my water level. Please contact",
      quantity: 2,
    },
    {
      product: "Neha Jha",
      name: "I want to order more than 1000 indicator lights. Do you supply in mass???",
      quantity: 1000,
    },
    {
      product: "Priya Gupta",
      name: "What is the maximum and minimum limit/range of your temperature controller.",
      quantity: 5,
    },
    {
      product: "Harpreet Singh",
      name: "I want to purchase Ammeter for my school physics lab. Is is safe for stuents to use it or these are industrial grade equipments???",
      quantity: 30,
    },
    {
      product: "Gaurav Saxena",
      name: "I want a timer for some personal project. Can you guide me get the timer which suits my requirement. ThankYou",
      quantity: 10,
    },
    {
      product: "Peter Sulekh",
      name: "Do you guys deliver these products to Australia. Contact me as soon as possible. Thank You",
      quantity: 100,
    },
  ];

  return (
    <>

    <CardTemplate listHeading={'Total Leads'} listItem={initialItems} />

    </>
  );
}

export default TotalLeads;
