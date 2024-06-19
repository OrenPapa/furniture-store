import Navbar from "../../components/navbar";
import Head from "./head";

function Home() {
  return (
    <div>
      <Navbar colored/>
      <div
        className="pt-28 w-full flex flex-col items-center"
        style={{ minHeight: "calc(100vh - 112px)" }}
      >
        <Head />
      </div>
    </div>
  );
}

export default Home;
