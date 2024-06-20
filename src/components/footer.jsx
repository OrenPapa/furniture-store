import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full h-[400px] bg-green-800 px-40 py-16 flex flex-col justify-center box-border">
      <div className="flex-1 flex flex-row justify-between items-start max-h-[200px]">
        <div className="w-3/5 flex flex-col">
          <div className="logo text-2xl font-bold cursor-pointer select-none text-white">
            Furniture
          </div>
          <div className="menu flex space-x-8 mt-2">
            <NavLink
              exact
              to="/"
              className={`menu-item  py-2 cursor-pointer select-none text-white `}
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className={`menu-item  py-2 cursor-pointer select-none text-white `}
            >
              About us
            </NavLink>
            <NavLink
              to="/services"
              className={`menu-item  py-2 cursor-pointer select-none text-white `}
            >
              Services
            </NavLink>
            <NavLink
              to="/blog"
              className={`menu-item  py-2 cursor-pointer select-none text-white `}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact-us"
              className={`menu-item  py-2 cursor-pointer select-none text-white `}
            >
              Contact us
            </NavLink>
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-end">
          <div className="flex flex-col">
            <div className="text-white">Get the freshest news</div>
            <div className="flex flex-row mt-4">
              <input
                className="outline-0 w-[320px] h-[40px] bg-transparent border-2 border-white pl-2 text-white border-r-0"
                placeholder="Your email here"
                type="email"
              />
              <button className="text-white border-2 border-white h-[40px] px-6">
                Subscribe
              </button>
            </div>
            <div className="flex flex-row mt-4 text-white">
              <input
                type="checkbox"
                className="border-white h-4 w-4 m-0 p-0 "
              />
              <div className="w-[432px] ml-2 mt-[-4px]">
                By checking the box, you agree to recieve news about our latest
                offers via email.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between flex-2 border-t-2 border-grey-100">
        <div className="flex flex-row justify-between items-start text-white w-[920px] mt-4">
          <div className="w-fit">Terms & Conditions</div>
          <div className="w-fit">|</div>
          <div className="w-fit">Privacy Policy</div>
          <div className="w-fit">|</div>
          <div className="w-fit">Supply Chains Act</div>
          <div className="w-fit">|</div>
          <div className="w-fit">Supplier Code of Conduct</div>
          <div className="w-fit">|</div>
          <div className="w-fit">Marketing</div>
        </div>
        <div className="text-white mt-4">
          © 2024 Furniture USA, inc. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
