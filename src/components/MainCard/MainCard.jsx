import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addFav } from "../../features/movies/watchLaterListSlice";

const MainCard = ({ title, poster, desc, fav, id, children }) => {
  const dispatch = useDispatch();

  const handleFav = (movieId) => {
    dispatch(addFav(movieId));
  };

  return (
    <div className="bg-slate-600 relative w-fit h-fit group overflow-hidden border-4 border-black">
      <button
        onClick={()=>handleFav(id)}
        className="absolute h-4 w-4 right-2 top-2 z-10"
      >
        {fav ? <AiFillStar color="gold" /> : <AiOutlineStar color="gold" />}
      </button>
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
