import PropTypes from "propTypes";
export default function GalleryArticle({ data }) {
  const { photo_URL, user_feedback, user_name } = data || {};
  return (
    <>
      <article className="relative flex h-72 flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl">
        <img
          src={photo_URL}
          alt=""
          className="absolute inset-0 object-cover w-full h-full -z-10"
        />

        <div className="absolute flex opacity-0  transition hover:opacity-100 inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40">
          <div className="  self-end p-5 ">
            <div
              className="text-lg my-4 font-semibold leading-6 text-[#f5b388]"
              href=""
            >
              <span>Name: </span> {user_name}
            </div>
            <div className="text-lg font-semibold leading-6 text-[#f5b388]">
              <span className=" text-[#F9985D]">Feedback: </span>{" "}
              <h3>{user_feedback}</h3>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

GalleryArticle.propTypes = {
  data: PropTypes.object.isRequired,
};
