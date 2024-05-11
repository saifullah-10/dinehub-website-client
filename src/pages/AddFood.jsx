import { useContext } from "react";
import TitleForPages from "../components/common/TitleForPages";
import { Context } from "../context/ContextProvide";

export default function AddFood() {
  const { user } = useContext(Context);
  const { displayName } = user;
  return (
    <div>
      <div>
        <TitleForPages PageTitle="Add A Food Item" DeviderWidth="500px" />
      </div>
      {/* form */}
      <div>
        <section className=" dark:bg-gray-900">
          <div className=" px-4 mx-auto max-w-2xl">
            <form action="#">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Food Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-transparent border focus:outline-none border-[#FAA846] text-[#F8BD69] text-sm rounded-lg   focus:border-[#FAA846] block w-full p-2.5 "
                    placeholder="Type Food name"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Food URL
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-transparent border focus:outline-none border-[#FAA846] text-[#F8BD69] text-sm rounded-lg   focus:border-[#FAA846] block w-full p-2.5 "
                    placeholder="Type Food URL"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Food Category
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    className="bg-transparent border focus:outline-none border-[#FAA846] text-[#F8BD69] text-sm rounded-lg  focus:border-[#FAA846] block w-full p-2.5 "
                    placeholder="Food Category"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Add By
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={displayName}
                    id="price"
                    className="bg-transparent border focus:outline-none border-[#FAA846] text-[#F8BD69] text-sm rounded-lg  focus:border-[#FAA846] block w-full p-2.5 "
                    placeholder="$2999"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="brand"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Quantity
                  </label>
                  <input
                    type="text"
                    name="brand"
                    id="brand"
                    className="bg-transparent border focus:outline-none border-[#FAA846] text-[#F8BD69] text-sm rounded-lg  focus:border-[#FAA846] block w-full p-2.5 "
                    placeholder="Food Category"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="bg-transparent border focus:outline-none border-[#FAA846] text-[#F8BD69] text-sm rounded-lg  focus:border-[#FAA846] block w-full p-2.5 "
                    placeholder="$2999"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="8"
                    className="block focus:outline-none p-2.5 w-full text-sm text-[#F8BD69] bg-transparent rounded-lg border border-[#FAA846] focus:ring-primary-500 focus:border-primary-500 "
                    placeholder="Your description here"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex items-center bg-[#F39423] px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center hover:text-gray-300 text-[#fff] bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Add product
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}
