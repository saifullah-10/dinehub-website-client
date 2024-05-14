import { useQuery } from "@tanstack/react-query";
import axios from "../util/axiosConfig";
import Loading from "../components/Loading";
import { useContext } from "react";
import { Context } from "../context/ContextProvide";
import TitleForPages from "../components/common/TitleForPages";
import TableRowPurchasePage from "../components/TableRowPurchasePage";
import { Helmet } from "react-helmet";
import { signOut } from "firebase/auth";
import auth from "../util/firebase.config";
import { useNavigate } from "react-router-dom";

export default function MyPurchase() {
  const navigate = useNavigate();
  const {
    user: { uid },
    setUser,
  } = useContext(Context);
  const { data, isPending, refetch } = useQuery({
    queryKey: ["myPurchase"],
    queryFn: async () => {
      return axios
        .get(`/mypurchase/${uid}`)
        .then((res) => res.data)
        .catch((e) => {
          console.log(e);
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
        <title> My Purchase</title>
      </Helmet>
      <div>
        <TitleForPages PageTitle="My Purchase" DeviderWidth="400px" />
      </div>
      <div>
        {data.length === 0 ? (
          <div>
            <div className="flex justify-center items-center ">
              <h1 className="text-4xl font-bold text-[#FAA846]">
                You have no purchase
              </h1>
            </div>
          </div>
        ) : (
          <div className=" px-3  overflow-x-scroll">
            {/* my purchase */}

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
                    Price/pcs
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Order Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Made By
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    total payable
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 text-left font-medium uppercase tracking-wider"
                  >
                    Purchase Date
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
                  <TableRowPurchasePage
                    key={data._id}
                    data={data}
                    refetch={refetch}
                  />
                ))}
                {/* More rows... */}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
