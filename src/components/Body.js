import RestroCard, {PromotedRestroCard} from "./RestroCard";
import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { OFFLINE_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const isOnline = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
              "http://localhost:5000/api/dapi/restaurants/list/v5?lat=13.0697174&lng=80.2432839"
            );
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();
            setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            // console.error("Failed to fetch restaurants:", error);
            setRestaurants(resList); // fallback to mock data
            setFilteredRestaurants(resList);
        }
    };

    if (!isOnline) {
      return (
        <div>
          <h1>You are offline. Please check your internet connection.</h1>
          <img src={OFFLINE_IMAGE_URL} alt="Offline" />
        </div>
      );
    }

    return restaurants.length === 0 ? <Shimmer/> : (
    <div className="p-2.5">
        <div className="flex gap-2.5 mb-2.5">
            <input className="border border-gray-300 rounded p-1" type="text" name="search" placeholder="Search for items..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
            <button
            className="search-btn bg-amber-300 text-black rounded p-1"
            onClick={() => {
              const filteredList = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
            >Search</button>
        </div>
        <div className="flex gap-2.5 mb-2.5">
            <button
            className="filter-btn bg-green-500 text-white rounded p-1"
            onClick={() => {
              const filteredList = restaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurants(filteredList);
            }}
            >Show Top rated ({'>'}4.5)</button>
        </div>
        <div className="pure-veg-filter">
            <input type="checkbox" id="veg-only" name="veg-only" 
            onChange={(e) => {
              const isChecked = e.target.checked;
              const filteredList = isChecked
                ? restaurants.filter((res) => res.info.veg === true)
                : restaurants;
              setFilteredRestaurants(filteredList);
            }} />
            <label htmlFor="veg-only"> Pure Veg Only</label>
        </div>
        <div className="flex gap-2.5 mb-2.5 self-start flex-wrap">
              {filteredRestaurants.map((restro) => {
                if (restro.info.promoted) {
                  const Promoted = PromotedRestroCard(RestroCard);
                  return (
                    <Promoted key={restro.info.id} resData={restro} />
                  );
                } else {
                  return (
                    <RestroCard key={restro.info.id} resData={restro} />
                  );
                }
              })}
        </div>
    </div>
  );
};
export default Body;