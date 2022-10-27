const MainCard = ({ title, poster, desc, children }) => {
  return (
    <div className="bg-slate-600 relative w-fit h-fit group overflow-hidden border-4 border-black">
      <img
        className="max-w-[200px] h-[20em] object-cover"
        src={
          poster === null
            ? "https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"
            : `https://image.tmdb.org/t/p/w200${poster}`
        }
        alt={title + "poster image"}
      />
      <div className="absolute w-full h-[20em] top-full group-hover:top-0 transition-all flex flex-col gap-4 py-4 px-2 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 bg-black">
        <h2 className="text-2xl">{title}</h2>
        <p className="overflow-y-scroll w-auto h-full scrollbar-hide">{desc}</p>
        {children}
      </div>
    </div>
  );
};

export default MainCard;
