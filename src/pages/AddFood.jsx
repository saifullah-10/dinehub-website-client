import { useContext } from "react";
import TitleForPages from "../components/common/TitleForPages";
import { Context } from "../context/ContextProvide";
import axios from "axios";
import swal from "sweetalert";
import { Helmet } from "react-helmet";

export default function AddFood() {
  const { user } = useContext(Context);
  const { displayName, uid } = user;

  const handleAddSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const price = e.target.price.value;
    const addby = e.target.addby.value;
    const description = e.target.description.value;
    const category = e.target.category.value;
    const quantity = e.target.quantity.value;
    const origin = e.target.origin.value;
    if (!/^(ftp|http|https):\/\/[^ "]+$/.test(photo)) {
      swal({
        title: "Something went wrong, Provide valid URL",

        icon: "error",
        button: "Ok",
      });
      return;
    }
    const addData = {
      food_name: name,
      food_image: photo,
      food_category: category,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      added_by: addby,
      food_origin: origin,
      description: description,
      uid: uid,
      count: 0,
    };
    axios
      .post("http://localhost:3000/addFood", addData)
      .then((res) => {
        console.log(res);
        swal({
          title: "Successfully Added",

          icon: "success",
          button: "Ok",
        });
      })
      .catch((e) => {
        console.error(e);
        swal({
          title: "Something went wrong, Please try again",

          icon: "error",
          button: "Ok",
        });
      });
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add A Item</title>
      </Helmet>
      <div>
        <TitleForPages PageTitle="Add A Food Item" DeviderWidth="400px" />
      </div>
      {/* form */}
      <div>
        <section className=" dark:bg-gray-900">
          <div className=" px-4 mx-auto max-w-2xl">
            <form onSubmit={handleAddSubmit}>
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
                    htmlFor="photo"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Food Image URL
                  </label>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    className="bg-transparent border focus:outline-none border-[#FAA846] text-[#F8BD69] text-sm rounded-lg   focus:border-[#FAA846] block w-full p-2.5 "
                    placeholder="Type Food Image URL"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="origin"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Food Origin
                  </label>
                  <input
                    type="text"
                    name="origin"
                    id="origin"
                    className="bg-transparent border focus:outline-none border-[#FAA846] text-[#F8BD69] text-sm rounded-lg   focus:border-[#FAA846] block w-full p-2.5 "
                    placeholder="Type Food Origin"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="categoty"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Food Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    id="categoty"
                    className="bg-transparent border focus:outline-none border-[#FAA846] text-[#F8BD69] text-sm rounded-lg  focus:border-[#FAA846] block w-full p-2.5 "
                    placeholder="Food Category"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="addby"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Add By
                  </label>
                  <input
                    type="text"
                    name="addby"
                    value={displayName}
                    readOnly
                    id="addby"
                    className="bg-transparent border focus:outline-none border-[#FAA846] text-[#F8BD69] text-sm rounded-lg  focus:border-[#FAA846] block w-full p-2.5 "
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="quantity"
                    className="block mb-2 text-sm font-medium text-[#F39423] dark:text-[#F8BD69]"
                  >
                    Quantity
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    className="bg-transparent border focus:outline-none border-[#FAA846] text-[#F8BD69] text-sm rounded-lg  focus:border-[#FAA846] block w-full p-2.5 "
                    placeholder="Food Quantity"
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
                    placeholder="Food Price"
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
                    required
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
