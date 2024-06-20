import sofaImage from "../../assets/sofa.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquareAlt,
  faBagShopping,
  faTruckLoading,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

function InfoItem(props) {
  const { icon, title, description } = props;
  return (
    <div className="flex flex-col items-start max-w-[300px] pr-6">
      <FontAwesomeIcon
        icon={icon}
        style={{ height: "24px", marginBottom: "1rem" }}
      />
      <h1 className="text-2xl font-bold mb-4 max-w-[400px]">{title}</h1>
      <p className="mb-8 max-w-[600px]">{description}</p>
    </div>
  );
}

function ChoseUsSection() {
  return (
    <div className="max-w-[1600px] w-full h-[600px] flex flex-row justify-center px-2">
      <div className=" flex flex-col w-1/2 h-full justify-center">
        <div className="flex flex-col justify-center ">
          <h1 className="text-4xl font-bold mb-4 max-w-[400px]">
            Why choose us ?
          </h1>
          <p className="mb-8 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            mauris quam. Etiam ut risus sit amet nisl suscipit posuere elit.
          </p>
        </div>
        <div className="flex flex-row">
          <InfoItem
            icon={faTruckLoading}
            title="Fast & free shipping"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            mauris quam."
          />
          <InfoItem
            icon={faBagShopping}
            title="Easy to shop"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            mauris quam."
          />
        </div>
        <div className="flex flex-row">
          <InfoItem
            icon={faPhoneSquareAlt}
            title="24/7 Support"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            mauris quam."
          />
          <InfoItem
            icon={faRecycle}
            title="Free returns"
            description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            mauris quam."
          />
        </div>
      </div>
      <div className="w-1/2 h-full ">
        <img src={sofaImage} alt="Second Image" className=" h-full w-full" />
      </div>
    </div>
  );
}

InfoItem.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ChoseUsSection;
