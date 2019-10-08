//import createStackNavigator
import { createStackNavigator } from "react-navigation-stack";
// import your components here they should be full screens
import Home from "../Components/HomePage";
import Login from "../Components/Login";

import coffeeDetail from "../Components/CoffeeDetail";
import coffeeList from "../Components/CoffeeList";

const MyStackNav = createStackNavigator(
  {
    //give names to your components that you will be using throughout your project
    // HomeScreen: Home,
    Login: Login,
    coffeeList: coffeeList,
    coffeeDetail: coffeeDetail
  },
  {
    //define the intial component when the app runs
    initialRouteName: "Login"
  }
);

export default MyStackNav;
