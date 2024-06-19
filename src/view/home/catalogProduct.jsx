import PropTypes from "prop-types";

function CatalogProduct({ image, title, price }) {
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg">
      <img
        src={image}
        alt={title}
        className="h-[350px] w-[250px] object-cover mb-4"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-lg text-gray-700">${price}</p>
    </div>
  );
}

CatalogProduct.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CatalogProduct;
