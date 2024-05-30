import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function SetMenuItems({ item }) {
  const {
    _id,

    description,
    included,
    food_image,
    food_name,

    price,
    quantity,
  } = item;
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border-[#ED8135] border-4 p-3 ">
      <div className="relative">
        <a href="#">
          <img
            className="w-full rounded-lg"
            src={food_image}
            alt="menu image"
          />
          <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
        </a>

        <a href="!#">
          <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
            <span className="font-bold">10%</span>
            <small>Discount</small>
          </div>
        </a>
      </div>
      <div className="px-6 py-4">
        <a
          href="#"
          className="font-semibold text-lg text-[#ED8135] inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >
          {food_name}
        </a>
        <p className="text-[#C2601C] text-sm">{description}</p>
      </div>
      <div className="px-6  flex flex-col ">
        <div>
          <h2 className=" text-[#ED8135]">Included:</h2>
          <ol className=" list-disc pl-10 text-[#DC9E73]">
            {included?.map((items, index) => {
              return <li key={index}>{items}</li>;
            })}
          </ol>
        </div>
        <div className=" flex justify-between text-lg text-[#ED8135] my-4">
          <h3>Price: ${price}</h3>
          <h3>Available Quantity: {quantity} Set</h3>
        </div>
        <div>
          <div className="w-1/2 px-2">
            {quantity === 0 ? (
              <div>
                <button
                  className={`w-full cursor-not-allowed border-2 border-[#FA6E31] py-2 px-4 rounded-full font-bold hover:text-[#F78656]`}
                  disabled
                >
                  Purchase
                </button>

                {quantity === 0 ? <p className=" my-3">Out Of Stock</p> : ""}
              </div>
            ) : (
              <Link to={`/purchase/${_id}`} className="w-full">
                <button className="w-full border-2 border-[#FA6E31] py-2 px-4 text-[#FA6E31] rounded-full font-bold hover:text-[#F78656]">
                  Purchase
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

SetMenuItems.propTypes = {
  item: PropTypes.object.isRequired,
};
