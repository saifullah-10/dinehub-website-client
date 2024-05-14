import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function FoodCards({ data, quantity = false }) {
  const {
    food_image,
    food_category,
    price,
    food_name,
    _id,
    quantity: food_quantity,
  } = data || {};
  return (
    <div className=" flex justify-center">
      <div className="w-full   border-2 border-[#FA6E31] text-[#e7a661] rounded-lg shadow  ">
        <a href="#">
          <img
            className="p-2 rounded-2xl max-md:w-full"
            src={food_image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl text-[#FB9427] font-semibold tracking-tight  ">
              {food_name}
            </h5>
          </a>
          <div className="flex flex-col gap-3 items-center mt-2.5 mb-5">
            <div>
              <h2>
                Category: <span>{food_category}</span>
              </h2>
            </div>
            <div>
              {quantity ? (
                <div>
                  <h2>
                    Quantity: <span>{food_quantity} pcs</span>
                  </h2>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold ">${price} /pcs</span>
            <Link to={`/fooddetails/${_id}`}>
              <button className=" bg-[#FA6E31] hover:text-[#CDC2B5] text-[#Fff] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

FoodCards.propTypes = {
  data: PropTypes.object.isRequired,
  quantity: PropTypes.bool,
};
