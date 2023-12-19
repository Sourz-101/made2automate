import AddProduct from "./AddProduct";
import CardData from "./CardData";
import TotalLeads from "./TotalLeads";
import TotalOrders from "./TotalOrders";

function HomePage() {
  return (
    <>
      <CardData />

      <TotalOrders />

      <TotalLeads />

      <AddProduct />
    </>
  );
}

export default HomePage;
