import LoadingImg from "../assets/common/loading.gif";
export default function Loading() {
  return (
    <div className=" min-h-screen bg-transparent flex justify-center items-center">
      <img src={LoadingImg} alt="Loading" />
    </div>
  );
}
