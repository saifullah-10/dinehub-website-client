import { useQuery } from "@tanstack/react-query";
import TitleForPages from "../components/common/TitleForPages";
import TableRowAddPage from "../components/TableRowAddPage";
import axios from "../util/axiosConfig";
import Loading from "../components/Loading";
import { useContext } from "react";
import { Context } from "../context/ContextProvide";
import { Helmet } from "react-helmet";
import { signOut } from "firebase/auth";
import auth from "../util/firebase.config";
import { useNavigate } from "react-router-dom";

export default function MyAdded() {
  const navigate = useNavigate();
  const {
    user: { uid },
    setUser,
  } = useContext(Context);

  const { data, isPending, refetch } = useQuery({
    queryKey: ["myAdd"],
    queryFn: async () => {
      return axios
        .get(`/myfoods/${uid}`)
        .then((res) => res.data)
        .catch((e) => {
          axios
            .post("/logout")
            .then(() => {
              signOut(auth)
                .then(() => {
                  setUser(null);
                  navigate("/signin");
                })
                .catch((e) => console.log(e));
            })
            .catch((e) => console.log(e));
          console.log(e.response.status);
        });
    },
  });

  if (isPending) {
    return <Loading />;
  }
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title> My Add Items</title>
      </Helmet>
      <div>
        <TitleForPages PageTitle="My Add Foods" DeviderWidth="400px" />
      </div>
      {/* table */}
      {data.length === 0 ? (
        <div>
          <div className="flex justify-center items-center ">
            <h1 className="text-4xl font-bold text-[#E1881E]">
              You have not added any foods
            </h1>
          </div>
        </div>
      ) : (
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
                  className="px-4 py-3  font-medium uppercase text-center tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-transparent divide-y divide-[#FAA846]">
              {data?.map((data) => (
                <TableRowAddPage key={data._id} data={data} refetch={refetch} />
              ))}
              {/* More rows... */}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
