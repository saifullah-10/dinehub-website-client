import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function SingleFood() {
  const { id } = useParams();
  console.log(id);
  const { data, isPending } = useQuery({
    queryKey: ["fooddetails"],
    queryFn: async () => {
      return axios
        .get(`http://localhost:3000/fooddetails/${id}`)
        .then((res) => res.data);
    },
  });
  console.log(data);
  if (isPending) {
    return <Loading />;
  }

  const {
    added_by,
    description,
    food_category,
    food_image,
    food_name,
    food_origin,
    price,
  } = data;
  return (
    <div>
      <div className="   py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4 text-[#F9B294]">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-xl bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full rounded-xl object-cover"
                  src={food_image}
                  alt="Product Image"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full border-2 border-[#FA6E31] py-2 px-4 rounded-full font-bold hover:text-[#F78656] dark:hover:bg-gray-700">
                    Purchase
                  </button>
                </div>
                <div className="w-1/2 px-2"></div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-[#F78656]  mb-2">
                {food_name}
              </h2>

              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold  text-[#F78656] ">Price:</span>
                  <span className=""> ${price}</span>
                </div>
                <div>
                  <span className="font-bold text-[#F78656] ">Category: </span>
                  <span className="">{food_category}</span>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold  text-[#F78656]">Made By: </span>
                  <span className="">{added_by}</span>
                </div>
                <div>
                  <span className="font-bold text-[#F78656] ">Category: </span>
                  <span className="">{food_category}</span>
                </div>
              </div>

              <div className="mb-4">
                <span className="font-bold text-[#F78656] ">Food Origin:</span>
                <div className="flex items-center mt-2">
                  <p>{food_origin}</p>
                </div>
              </div>
              <div>
                <span className="font-bold  text-[#F78656]">
                  Product Description:
                </span>
                <p className=" dark: text-sm mt-2">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
