import { createBottomTabNavigator } from "react-navigation-tabs";
//Import your stacks
//  import ProductStackNav from "./ProductStackNav";
import AuthTab from "./AuthTab";
import OrderTab from "./OrderTab";
import CoffeeTab from "./CoffeeTab.js";

const BottomTabNav = createBottomTabNavigator({
  Auth: AuthTab,
  Order: OrderTab,
  Coffee: CoffeeTab
});

export default BottomTabNav;
