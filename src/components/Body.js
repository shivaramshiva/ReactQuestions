import RestroCard from "./RestroCard";
import resList from "../utils/mockData";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
          // Use a CORS proxy to avoid CORS issues during development either as extension in browser or through any sites
          // Example site: https://corsproxy.io/
          // Use as https://corsproxy.io/?<original_url>
            const data = await fetch(
              "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0697174&lng=80.2432839"
            );
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();
            setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            setRestaurants(resList); // fallback to mock data
            setFilteredRestaurants(resList);
        }
    };

    return restaurants.length === 0 ? <Shimmer/> : (
    <div className="body">
        <div className="search-container">
            <input type="text" name="search" placeholder="Search for items..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            />
            <button
            className="search-btn"
            onClick={() => {
              const filteredList = restaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
            >Search</button>
        </div>
        <div className="filter-container">
            <button
            className="filter-btn"
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
        <div className="restro-card-container">
            {
              filteredRestaurants.map((restro) => (
                  <RestroCard key={restro.info.id} resData={restro} />
              ))
            }
        </div>
    </div>
  );
};
export default Body;