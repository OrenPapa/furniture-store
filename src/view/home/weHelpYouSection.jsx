import livingroom from "../../assets/livingroom.jpg";
import livingroom2 from "../../assets/livingroom2.jpg";
import livingroom4 from "../../assets/livingroom4.jpeg";

function WeHelpYouSection() {
  return (
    <div className="max-w-[1600px] w-full h-[800px] flex flex-row justify-center items-center  py-16">
      <div className="w-1/2 h-full grid grid-cols-2 gap-4">
        <img
          src={livingroom}
          alt="First"
          className="col-span-1 row-span-2 w-full h-[672px] object-cover"
        />
        <img
          src={livingroom2}
          alt="Second"
          className="col-span-1 row-span-1 w-full h-[260px] object-cover"
        />
        <img
          src={livingroom4}
          alt="Third"
          className="col-span-1 row-span-1 w-full h-[396px] object-cover"
        />
      </div>
      <div className=" flex flex-col w-1/2 h-full justify-center items-end">
        <div className="flex flex-col justify-center ">
          <h1 className="text-4xl font-bold mb-4 max-w-[600px]">
            We help you make modern interior design.
          </h1>
          <p className="mb-8 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            mauris quam. Etiam ut risus sit amet nisl suscipit posuere elit. Sit
            amet, consectetur adipiscing.
          </p>
        </div>
        <div className="flex flex-row w-full  max-w-[600px]">
          <div className="flex flex-wrap w-full">
            <div className="w-1/2 p-4">
              <ol className="list-disc pl-5">
                <li className="mb-4">
                  Donec consectetur auctor metus vel dapibus. Fusce vitae felis
                  vitae eros sagittis pretium. In hac habitasse platea dictumst.
                </li>
                <li>
                  Donec consectetur auctor metus vel dapibus. Fusce vitae felis
                  vitae eros sagittis pretium. In hac habitasse platea dictumst.
                </li>
              </ol>
            </div>
            <div className="w-1/2 p-4">
              <ol className="list-disc pl-5">
                <li className="mb-4">
                  Donec consectetur auctor metus vel dapibus. Fusce vitae felis
                  vitae eros sagittis pretium. In hac habitasse platea dictumst.
                </li>
                <li>
                  Donec consectetur auctor metus vel dapibus. Fusce vitae felis
                  vitae eros sagittis pretium. In hac habitasse platea dictumst.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="w-[600px] flex justify-start mt-2">
          <button className="bg-black text-black py-2 px-4 rounded-[20px] text-white ml-2">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default WeHelpYouSection;
