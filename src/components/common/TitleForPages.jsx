import { Divider } from "@mui/material";
import CommonImg from "../../assets/common/design.png";
import PropTypes from "prop-types";
export default function TitleForPages({ PageTitle, DeviderWidth = "200px" }) {
  return (
    <div
      className=" lg:h-[250px] h-[200px]"
      style={{
        backgroundImage: `url(${CommonImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        width: "100%",
        transform: "translateY(-7%)",
      }}
    >
      <div className=" py-10 flex flex-col items-center">
        <h1 className=" text-[2rem] lg:text-[3rem] text-[#ffd] text-center ">
          {PageTitle}
        </h1>
        <Divider
          sx={{
            width: `${DeviderWidth}`,
            height: "5px",
            background: "#F28B30",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}

TitleForPages.propTypes = {
  PageTitle: PropTypes.string.isRequired,
  DeviderWidth: PropTypes.string,
};
