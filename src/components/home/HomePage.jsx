import AddProduct from "./AddProduct";
import CardData from "./CardData";
import Footer from "./Footer";
import TotalLeads from "./TotalLeads";
import TotalOrders from "./TotalOrders";

function HomePage() {
  return (
    <>
      <CardData />

      <TotalOrders />

      <TotalLeads />

      <Footer />

      <AddProduct />
    </>
  );
}

export default HomePage;
