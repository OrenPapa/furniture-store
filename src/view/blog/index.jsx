import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function Blog() {
  return (
    <div>
      <Navbar />
      <div
        className="pt-28 w-full flex flex-col items-center"
        style={{ minHeight: "calc(100vh - 112px)" }}
      >
        <div
          style={{ minHeight: "calc(100vh - 512px)" }}
          className="flex w-full flex-col justify-center items-center"
        >
          <div className="text-2xl mb-2">We are sorry!</div>
          <div> This page is still in development</div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Blog;
