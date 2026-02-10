import { useEffect } from "react";
import { useState } from "react";
import { menuDetails } from "../utils/menuMockData";
import { useParams } from "react-router-dom";
const RestroMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    // Fetch menu items from an API or perform any side effects
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0697174&lng=80.2432839&restaurantId=" + resId);
      const data = await response.json();
      console.log("Menu items fetched:", data);
      setResInfo(data);
    } catch (error) {
      // console.error("Error fetching menu items:", error);
      setResInfo(menuDetails); // fallback to mock data
    }
  };

  return (
    console.log(resInfo),
    <div className="restro-menu">
      <h2>Restaurant Menu</h2>
      <ul>
        {resInfo ? (
          resInfo.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default RestroMenu;
