import PropTypes from "prop-types";
export default function FoodCards({ data }) {
  console.log(data);
  const { food_image, food_category, price, food_name } = data;
  return (
    <div className=" flex justify-center">
      <div className="w-full  bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
          <img
            className="p-2 rounded-2xl"
            src={food_image}
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
              {food_name}
            </h5>
          </a>
          <div className="flex items-center mt-2.5 mb-5">
            <div>
              <h2>
                Category: <span>{food_category}</span>
              </h2>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900">${price}</span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

FoodCards.propTypes = {
  data: PropTypes.object.isRequired,
};
