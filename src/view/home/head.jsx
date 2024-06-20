import HeadSofaImage from "../../assets/headSofa.png";

function Head() {
  return (
    <div className="w-full flex bg-green-800 h-[600px] text-white py-20 justify-center">
      <div className="w-full h-full flex flex-row justify-between max-w-[1600px] mx-2">
        <div className=" h-full flex flex-col justify-center">
          <h1 className="text-4xl font-bold-600 mb-4  max-w-[400px]">
            Modern Interior Design Studio
          </h1>
          <p className="mb-8 max-w-[420px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            mauris quam. Etiam ut risus sit amet nisl suscipit posuere.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-500 text-black py-2 px-4 rounded-[20px]">
              Shop Now
            </button>
            <button className="bg-transparent border border-white py-2 px-4 rounded-[20px]">
              Explore
            </button>
          </div>
        </div>
        <div className=" h-full flex justify-center mx-0 my-0">
          <img
            src={HeadSofaImage}
            alt="Sofa"
            className="h-[400px] w-[1000px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Head;
