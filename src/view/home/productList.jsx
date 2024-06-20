import furniture1 from "../../assets/furniture1.webp";
import furniture2 from "../../assets/furniture2.png";
import furniture3 from "../../assets/furniture3.png";
import PropTypes from "prop-types";

function ProductItem({ title, image }) {
  return (
    <div className="flex flex-row h-[200px]">
      <img alt="product" src={image} />
      <div className="flex flex-col h-full justify-center">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="max-w-[280px] mb-2 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
          mauris quam. Etiam ut.
        </div>
        <div className="font-bold pointer select-none cursor-pointer">
          Read more
        </div>
      </div>
    </div>
  );
}

function ProductList() {
  return (
    <div className="w-full py-16 px-40 flex flex-wrap flex-row justify-between">
      <ProductItem title="Armchair" image={furniture1} />
      <ProductItem title="Wingback Chair" image={furniture2} />
      <ProductItem title="Barrel Chair" image={furniture3} />
    </div>
  );
}

ProductItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProductList;
