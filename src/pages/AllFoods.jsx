import { Divider } from "@mui/material";
import CommonImg from "../assets/common/design.png";

export default function AllFoods() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${CommonImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "250px",
          width: "100%",
          transform: "translateY(-7%)",
        }}
      >
        <div className=" py-10 flex flex-col items-center">
          <h1 className=" text-[2rem] lg:text-[3rem] text-[#ffd] text-center ">
            Sign In
          </h1>
          <Divider
            sx={{
              width: "200px",
              height: "5px",
              background: "#F28B30",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
      <div>{/* other code */}</div>
    </div>
  );
}
