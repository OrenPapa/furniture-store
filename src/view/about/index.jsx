import Navbar from "../../components/navbar";
import ClientsSection from "./clientsSection";
import Head from "./head";
import Footer from "../../components/footer";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <div
        className="pt-28 w-full flex flex-col items-center"
        style={{ minHeight: "calc(100vh - 112px)" }}
      >
        <Head />
        <ClientsSection />
        <Footer />
      </div>
    </div>
  );
}

export default AboutUs;
