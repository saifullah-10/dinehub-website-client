import { Link } from "react-router-dom";
import errorLogo from "../assets/errorPage.png";

export default function Error() {
  return (
    <div className=" flex min-h-screen items-center justify-center">
      <div className=" flex flex-col items-center">
        <img src={errorLogo} alt="err" />
        <Link to={"/"}>
          <button className=" bg-[#DD5908] px-5 rounded-xl text-white font-medium py-3">
            Back To Home
          </button>
        </Link>
      </div>
    </div>
  );
}
