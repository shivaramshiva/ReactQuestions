import { CDN_URL } from "../utils/constants";
const RestroCard = (props) => {
  const {resData} = props;
  const { name, locality, areaName, costForTwo, cuisines, avgRating, sla } = resData?.info;
  const UPDATED_IMG_URL = `${CDN_URL}${resData?.info?.cloudinaryImageId}`;

  return (
      <div className="restro-card">
        <img className="restro-logo" src={UPDATED_IMG_URL} alt="Restaurant Logo" />
        <div className="restro-details">
          <h2>{name}</h2>
          <p>{locality}</p>
          <p>{areaName}</p>
          <p>{costForTwo}</p>
          <p>{cuisines.join(", ")}</p>
          <p>{avgRating} Stars</p>
          <p>{sla.deliveryTime} mins</p>
        </div>
      </div>
  );
};

export default RestroCard;