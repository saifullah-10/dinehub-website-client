export default function GalleryArticle() {
  return (
    <>
      <article className="relative flex h-72 flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFNhc2hpbWl8ZW58MHwwfDB8fHww"
          alt=""
          className="absolute inset-0 object-cover w-full h-full -z-10"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
        <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
        <a
          className="text-lg font-semibold leading-6 text-white hover:text-teal-100"
          href=""
        >
          The Future of Artificial Intelligence: Trends and Challenges
        </a>
      </article>
    </>
  );
}
