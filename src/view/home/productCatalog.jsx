import CatalogProduct from "./catalogProduct";
import blackChairImage from "../../assets/blackChair.png";
import blueChairImage from "../../assets/blueChair.png";
import greenChairImage from "../../assets/greenChair.png";

function ProductCatalog() {
  return (
    <div className="w-full py-16 px-40 flex flex-wrap justify-between gap-8">
      <div className="flex flex-col justify-center ">
        <h1 className="text-4xl font-bold mb-4 max-w-[320px]">
          Crafted with excellent material.
        </h1>
        <p className="mb-8 max-w-[320px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          mauris quam. Etiam ut risus sit amet nisl suscipit posuere.
        </p>
        <div className="flex space-x-4">
          <button className="bg-black py-2 px-4 rounded-[20px] text-white">
            Explore
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <CatalogProduct
          title="Black Chair"
          price={199}
          image={blackChairImage}
        />
      </div>
      <div className="flex justify-center items-center ">
        <CatalogProduct title="Blue Chair" price={145} image={blueChairImage} />
      </div>
      <div className="flex justify-center items-center ">
        <CatalogProduct
          title="Green Chair"
          price={120}
          image={greenChairImage}
        />
      </div>
    </div>
  );
}

export default ProductCatalog;
