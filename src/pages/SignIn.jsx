import CommonImg from "../assets/common/design.png";
export default function SignIn() {
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
        <h1 className=" text-[3rem] text-[#FA9741] text-center py-16">
          Sign In
        </h1>
      </div>
    </div>
  );
}
