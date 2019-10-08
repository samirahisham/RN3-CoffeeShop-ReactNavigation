import React, { Component } from "react";
import { Icon } from "native-base";
import coffeeList from "../Components/CoffeeList";
import coffeeDetail from "../Components/CoffeeDetail";

import { createStackNavigator } from "react-navigation-stack";

const CoffeeTab = createStackNavigator(
  {
    coffeeList: coffeeList,
    coffeeDetail: coffeeDetail
  },

  {
    initialRouteName: "coffeeList",
    navigationOptions: {
      tabBarLabel: "Shops",
      tabBarIcon: () => <Icon type="Entypo" name="shop" size={20} />
    }
  }
);

export default CoffeeTab;
