import { useQuery } from "@tanstack/react-query";
import TitleForPages from "../components/common/TitleForPages";
import axios from "../util/axiosConfig";
import Loading from "../components/Loading";
import FoodCards from "../components/FoodCards";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function AllFoods() {
  const [data, setData] = useState(null);
  const [pagination, setPagination] = useState(1);

  const { data: totalData, isPending: pendingState } = useQuery({
    queryKey: ["totalFoodsdata"],
    queryFn: async () => {
      return axios
        .get(`/totalDataCount`)
        .then((res) => res.data)
        .catch((e) => console.log(e));
    },
  });

  const {
    data: allData,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["allFoods"],
    queryFn: async () => {
      return axios.get(`/allfoods?page=${pagination}`).then((res) => res.data);
    },
  });
  useEffect(() => {
    refetch();
  }, [pagination, refetch]);
  useEffect(() => {
    setData(allData);
  }, [allData]);
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    axios.get(`/foods/search?q=${value}`).then((res) => setData(res.data));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if (isPending) {
    return <Loading />;
  }
  if (pendingState) {
    return <Loading />;
  }

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title> All Foods</title>
      </Helmet>
      <TitleForPages PageTitle="All Foods" DeviderWidth="250px" />

      <div>
        <form
          onSubmit={handleSearch}
          className=" lg:mx-auto md:mx-auto mx-2 mb-4 max-w-xl  py-2 px-6 lg:my-8 rounded-full  border-2 flex  border-[#F08425]"
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
        <div className=" flex my-2 justify-center">
          <Stack>
            <Pagination
              count={Math.ceil(totalData?.count / 10)}
              sx={{
                "& .MuiPaginationItem-root": {
                  color: "#FFF",
                },
                "& .Mui-selected": {
                  background: "#F08425",
                },
              }}
              page={pagination}
              onChange={(event, value) => {
                setPagination(value);
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}
