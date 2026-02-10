import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const RestroCard = (props) => {
  const {resData} = props;
  const { name, locality, areaName, costForTwo, cuisines, avgRating, sla } = resData?.info;
  const UPDATED_IMG_URL = `${CDN_URL}${resData?.info?.cloudinaryImageId}`;

  return (
    <Link to={`/restaurant/${resData?.info?.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div className="border-2 border-solid border-transparent bg-[#f0f0f0] m-1.25 w-64 h-full rounded-[10px]
      hover:border-amber-700 hover:text-white hover:bg-gray-700 hover:shadow-lg hover:transition-shadow duration-300 hover:cursor-pointer">
        <img className="w-full h-37.5 object-cover rounded-t-[10px]" src={UPDATED_IMG_URL} alt="Restaurant Logo" />
        <div className="p-2.5 hover:text-white">
          <h2 className="font-bold text-lg">{name}</h2>
          <p>{locality}</p>
          <p>{areaName}</p>
          <p>{costForTwo}</p>
          <p>{cuisines.join(", ")}</p>
          <p>⭐{avgRating} Stars⭐</p>
          <p>{sla.deliveryTime} mins⏱️</p>
        </div>
      </div>
    </Link>
  );
};

export default RestroCard;