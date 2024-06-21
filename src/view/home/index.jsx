import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ChoseUsSection from "./choseUsSection";
import Head from "./head";
import ProductCatalog from "./productCatalog";
import ProductList from "./productList";
import WeHelpYouSection from "./weHelpYouSection";

function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="pt-28 w-full flex flex-col items-center"
        style={{ minHeight: "calc(100vh - 112px)" }}
      >
        <Head />
        <ProductCatalog />
        <ChoseUsSection />
        <WeHelpYouSection />
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
