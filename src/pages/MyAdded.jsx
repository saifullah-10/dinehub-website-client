import { useQuery } from "@tanstack/react-query";
import TitleForPages from "../components/common/TitleForPages";
import TableRowAddPage from "../components/TableRowAddPage";
import axios from "axios";
import Loading from "../components/Loading";
import { useContext } from "react";
import { Context } from "../context/ContextProvide";

export default function MyAdded() {
  const {
    user: { uid },
  } = useContext(Context);

  const { data, isPending } = useQuery({
    queryKey: ["myAdd"],
    queryFn: async () => {
      return axios
        .get(`http://localhost:3000/myfoods/${uid}`)
        .then((res) => res.data);
    },
  });
  console.log(data);
  if (isPending) {
    return <Loading />;
  }
  return (
    <div>
      <div>
        <TitleForPages PageTitle="My Add Foods" DeviderWidth="500px" />
      </div>
      {/* table */}
      <div className="overflow-x-auto px-3">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#E1881E] text-white">
            <tr>
              <th
                scope="col"
                className="px-4 py-3 text-left font-medium uppercase tracking-wider"
              >
                Foods
              </th>

              <th
                scope="col"
                className="px-4 py-3 text-left font-medium uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-left font-medium uppercase tracking-wider"
              >
                Quantity
              </th>

              <th
                scope="col"
                className="px-4 py-3 text-left font-medium uppercase tracking-wider"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-transparent divide-y divide-[#FAA846]">
            {data?.map((data) => (
              <TableRowAddPage key={data._id} data={data} />
            ))}
            {/* More rows... */}
          </tbody>
        </table>
      </div>
    </div>
  );
}