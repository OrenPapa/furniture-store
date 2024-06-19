import Navbar from "../../components/navbar";
import Head from "./head";
import ProductCatalog from "./productCatalog";

function Home() {
  return (
    <div>
      <Navbar colored />
      <div
        className="pt-28 w-full flex flex-col items-center"
        style={{ minHeight: "calc(100vh - 112px)" }}
      >
        <Head />
        <ProductCatalog />
      </div>
    </div>
  );
}

export default Home;
