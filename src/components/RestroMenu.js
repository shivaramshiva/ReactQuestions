import { useEffect } from "react";
import { useState } from "react";
import menuDetails from "../utils/menuMockData";
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

  // Log the structure for debugging
  console.log('resInfo:', resInfo);

  // Extract menu items for Swiggy API or mock data
  let menuItems = [];
  if (resInfo && resInfo.data && Array.isArray(resInfo.data.cards)) {
    // Try to find the REGULAR card group
    const groupedCard = resInfo.data.cards.find(
      c => c.groupedCard && c.groupedCard.cardGroupMap && c.groupedCard.cardGroupMap.REGULAR
    );
    if (groupedCard) {
      const regularCards = groupedCard.groupedCard.cardGroupMap.REGULAR.cards;
      // Flatten all itemCards arrays
      menuItems = regularCards
        .flatMap(card => card.card.card.itemCards || [])
        .map(ic => ic.card.info);
    }
  } else if (Array.isArray(resInfo)) {
    menuItems = resInfo;
  } else if (resInfo && Array.isArray(resInfo.items)) {
    menuItems = resInfo.items;
  } else if (resInfo && resInfo.data && Array.isArray(resInfo.data.items)) {
    menuItems = resInfo.data.items;
  }

  return (
    <div className="restro-menu">
      <h2>Restaurant Menu</h2>
      <ul>
        {menuItems.length > 0 ? (
          menuItems.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>Loading...</li>
        )}
      </ul>
    </div>
  );
};

export default RestroMenu;
