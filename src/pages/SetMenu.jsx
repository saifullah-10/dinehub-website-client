import { useQuery } from "@tanstack/react-query";
import TitleForPages from "../components/common/TitleForPages";
import SetMenuItems from "../components/SetMenuItems";
import axios from "../util/axiosConfig";
import Loading from "../components/Loading";

const fetchMenuItems = async () => {
  try {
    const response = await axios.get("/setmenu");
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
export default function SetMenu() {
  const {
    data: items,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["setMenuItems"],
    queryFn: fetchMenuItems,
  });

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  if (error) {
    console.log(error.message);
  }

  console.log(items);
  return (
    <div>
      <TitleForPages PageTitle="Set Menu" DeviderWidth="300px" />
      <div className=" mx-auto p-5 sm:p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          {items?.map((item) => (
            <SetMenuItems key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
