import SiteLogo from "../../assets/common/res-logo.png";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <footer className="relative bg-[#f7830733] text-white pt-8 lg:mt-10 mt-5 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-blueGray-700">
                <img src={SiteLogo} width={150} alt="" />
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Your one-stop solution for restaurant management, offering
                seamless control over menus, orders, and operations
              </h5>
              <div className="mt-6 flex lg:mb-0 mb-6">
                <button
                  className="bg-[#F28B30]  shadow-lg font-normal h-10 w-10 flex items-center justify-center  rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaTwitter />
                </button>
                <button
                  className="bg-[#F28B30]  shadow-lg font-normal h-10 w-10 flex items-center justify-center  rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaFacebookF />
                </button>
                <button
                  className="bg-[#F28B30]  shadow-lg font-normal h-10 w-10 flex items-center justify-center  rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FaInstagram />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        All Foods
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <h1 className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    Address
                  </h1>
                  <h2>1234 Main Street California,USA,12345</h2>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href="https://www.creative-tim.com/product/notus-js"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                >
                  {" "}
                  DineHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
