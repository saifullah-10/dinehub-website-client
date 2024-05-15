import PropTypes from "prop-types";
export default function BlogCards({ food_name, food_image, food_description }) {
  return (
    <>
      <div>
        <section className="container mx-auto antialiased px-5 py-5">
          <article className="flex  flex-wrap rounded-lg justify-between items-center md:flex-nowrap shadow-lg mx-auto  group cursor-pointer transform duration-500 hover:-translate-y-1">
            <img
              className="w-full max-h-[250px] object-cover rounded-xl md:w-[400px]"
              src={food_image}
              alt="The Magnificent Bogra"
            />
            <div>
              <div className="p-5 pb-10">
                <h1 className="text-2xl font-semibold text-[#F9AD6A]">
                  {food_name}
                </h1>
                <p className="text-xl text-[#CD7629] mt-2 leading-relaxed">
                  {food_description}
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

BlogCards.propTypes = {
  food_name: PropTypes.string,
  food_image: PropTypes.string,
  food_description: PropTypes.string,
};
