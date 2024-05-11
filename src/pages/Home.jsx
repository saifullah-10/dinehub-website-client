import { Divider } from "@mui/material";
import HeroImg from "../assets/home/heroImg.png";
import FoodCards from "../components/FoodCards";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../components/Loading";
export default function Home() {
  const { data, isPending } = useQuery({
    queryKey: ["foodCards"],
    queryFn: async () => {
      return axios
        .get("http://localhost:3000/homecard?elements=6")
        .then((res) => res.data);
    },
  });

  if (isPending) {
    return <Loading />;
  }

  return (
    <>
      {/* hero */}
      <section className=" lg:py-20 ">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto gap-7 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className=" place-self-center lg:col-span-7 flex flex-col  items-center">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-center lg:text-left md:text-5xl xl:text-6xl text-white">
              Welcome To <span className="text-[#FF6347]"> DineHub</span>
            </h1>
            <p className="max-w-2xl text-center lg:text-left text-[#F99062] mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl ">
              Where Passion Meets Palate, Every Dish Tells a Story
            </p>
            <div className=" flex justify-center items-center lg:justify-start">
              <Link to={"/allfoods"}>
                {" "}
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-[#F97942] rounded-lg hover:bg-transparent hover:text-[#F97942] text-white focus:ring-4 focus:ring-gray-100  "
                >
                  All Foods
                </a>
              </Link>
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 flex justify-center ">
            <img src={HeroImg} alt="mockup" />
          </div>
        </div>
      </section>
      {/* hero */}
      {/* top selling */}
      <div>
        <div className=" lg:ml-5 md:ml-5 md:py-6 py-5 lg:py-8 flex flex-col items-center lg:items-start">
          <h1 className="max-w-2xl lg:mb-4 mb-3 text-3xl font-extrabold tracking-tight leading-none text-center lg:text-left md:text-4xl xl:text-5xl text-white">
            Our Top Selling Foods
          </h1>
          <Divider
            sx={{
              width: "200px",
              height: "5px",
              background: "#F97942",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className=" grid lg:grid-cols-3 gap-5 md:px-3 px-2 lg:px-4">
          {data?.map((data) => (
            <FoodCards key={data._id} data={data} />
          ))}
        </div>
        <div className=" flex justify-center mt-5">
          <Link to={"/allfoods"}>
            <button className=" px-4 py-2 bg-[#F97942] hover:text-gray-300 font-medium text-white rounded-lg">
              See All ....
            </button>
          </Link>
        </div>
      </div>
      {/* top selling */}
    </>
  );
}
