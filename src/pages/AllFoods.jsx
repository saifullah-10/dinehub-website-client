import { useQuery } from "@tanstack/react-query";
import TitleForPages from "../components/common/TitleForPages";
import axios from "axios";
import Loading from "../components/Loading";
import FoodCards from "../components/FoodCards";
import { useEffect, useState } from "react";

export default function AllFoods() {
  const [data, setData] = useState(null);
  const { data: allData, isPending } = useQuery({
    queryKey: ["allFoods"],
    queryFn: async () => {
      return axios
        .get("http://localhost:3000/allfoods")
        .then((res) => res.data);
    },
  });
  useEffect(() => {
    setData(allData);
  }, [allData]);
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    axios
      .get(`http://localhost:3000/foods/search?q=${value}`)
      .then((res) => setData(res.data));
  };
  if (isPending) {
    return <Loading />;
  }

  return (
    <div>
      <TitleForPages PageTitle="All Foods" DeviderWidth="250px" />

      <div>
        <form
          onSubmit={handleSearch}
          className="mt-10 mx-auto max-w-xl py-2 px-6 lg:my-8 rounded-full  border-2 flex  border-[#F08425]"
        >
          <input
            type="text"
            placeholder="Search Food"
            className="bg-transparent text-[#F4D8BF]  w-full focus:outline-none pr-4 font-semibold border-0 focus-within:bg-transparent focus:ring-0 px-0 py-0"
            name="search"
          />
          <button className="flex bg-[#F08425] text-[#F4D8BF] flex-row items-center justify-center min-w-[130px] px-4 rounded-full  border disabled:cursor-not-allowed disabled:opacity-50 transition ease-in-out duration-150 text-base  font-medium tracking-wide border-transparent py-1.5 h-[38px] -mr-3">
            Search
          </button>
        </form>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:px-5 px-3">
          {data?.map((data) => (
            <FoodCards key={data._id} data={data} quantity={true} />
          ))}
        </div>
      </div>
    </div>
  );
}
