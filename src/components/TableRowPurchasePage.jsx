import axios from "axios";
import PropTypes from "prop-types";

export default function TableRowPurchasePage({ data, refetch }) {
  const {
    orderId,
    food_image,
    food_name,
    orderQuantity,
    added_by,
    date,
    totalPayable,
    price,
  } = data || {};
  const handleDelete = () => {
    axios
      .delete(`http://localhost:3000/deleteorder/${orderId}`)
      .then((res) => {
        console.log(res);
        refetch();
      })
      .catch((e) => console.log(e));
  };
  return (
    <tr className=" text-white">
      <td className="px-4 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-20 w-20">
            <img className="h-20 w-20 rounded-lg" src={food_image} alt="" />
          </div>
          <div className="ml-4">
            <div className="lg:text-lg md:text-lg text-sm font-medium ">
              {food_name}
            </div>
          </div>
        </div>
      </td>

      <td className="px-4 py-3 whitespace-nowrap">
        <span className="px-2 inline-flex lg:text-lg md:text-lg text-sm leading-5 font-semibold rounded-full  text-[#FAAC4F]">
          $ {price}
        </span>
      </td>
      <td className="px-4 py-3 whitespace-nowrap  lg:text-lg md:text-lg text-sm font-semibold text-[#FAAC4F] ">
        {orderQuantity} pcs
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <span className="px-2 inline-flex lg:text-lg md:text-lg text-sm leading-5 font-semibold rounded-full  text-[#FAAC4F]">
          {added_by}
        </span>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <span className="px-2 inline-flex lg:text-lg md:text-lg text-sm leading-5 font-semibold rounded-full  text-[#FAAC4F]">
          $ {totalPayable}
        </span>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <span className="px-2 inline-flex lg:text-lg md:text-lg text-sm leading-5 font-semibold rounded-full  text-[#FAAC4F]">
          {date}
        </span>
      </td>

      <td className="px-4  py-3 whitespace-nowrap  text-sm font-medium">
        <button
          onClick={handleDelete}
          className="bg-red-500 px-4 py-2 rounded-lg text-white hover:text-yellow-200"
        >
          {" "}
          <a>Delete</a>
        </button>
      </td>
    </tr>
  );
}

TableRowPurchasePage.propTypes = {
  data: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};
