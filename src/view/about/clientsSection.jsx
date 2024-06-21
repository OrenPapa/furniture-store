import person1 from "../../assets/person1.webp";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";
import person4 from "../../assets/person4.webp";
import PropTypes from "prop-types";

function ClientItem({ image, name, description }) {
  return (
    <div className="flex flex-col mx-2 items-center">
      <img
        alt="person"
        src={image}
        className="w-[100px] h-[100px] rounded-[50%] object-cover"
      />
      <div className="font-bold mt-2">{name}</div>
      <div className="w-[200px] text-center mt-2">{description}</div>
    </div>
  );
}

function ClientsSection() {
  return (
    <div className="w-full py-16 flex justify-center">
      <div className="w-full max-w-[1600px] flex flex-wrap flex-row justify-between mx-2">
        <ClientItem
          image={person1}
          name="John Smith"
          description={
            "Vestibulum nibh ipsum, tincidunt id massa et, semper porta sem. Vestibulum imperdiet ligula eu convallis gravida. Integer ornare, dolor a lobortis malesuada, lectus nibh facilisis lorem, est risus ut urna."
          }
        />
        <ClientItem
          image={person2}
          name="Anna Williams"
          description={
            "Aliquam gravida mattis tincidunt. Duis pharetra, nisl dictum euismod ullamcorper, arcu velit bibendum magna, vitae porttitor augue massa. Sed rhoncus dui mauris, et volutpat. Donec bibendum in lorem fermentum ornare."
          }
        />
        <ClientItem
          image={person3}
          name="Marc Taylor"
          description={
            "Ut est diam, lacinia eu eleifend malesuada, mollis ut ex. Fusce eget aliquam dui Duis pharetra. Aenean eget sollicitudin est. Curabitur gravida diam eu justo iaculis,sit amet risus quis in posuere est consequat."
          }
        />
        <ClientItem
          image={person4}
          name="Maddison Miller"
          description={
            "Curabitur vel semper mi. Aliquam dui lorem, egestas sit amet risus quis, euismod aliquet nibh. Donec vel dui quis ipsum aliquam lobortis. Suspendisse at orci nec tortor sit amet risus quis feugiat ultrices mollis risus."
          }
        />
      </div>
    </div>
  );
}

ClientItem.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ClientsSection;
