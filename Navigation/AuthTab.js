import Profile from "../Components/Profile/Profile";
import React, { Component } from "react";
import { Icon } from "native-base";
import Login from "../Components/Login";
import coffeeList from "../Components/CoffeeList";
import coffeeDetail from "../Components/CoffeeDetail";

import { createStackNavigator } from "react-navigation-stack";

const AuthTab = createStackNavigator(
  {
    Profile: Profile,
    Login: Login
  },

  {
    initialRouteName: "Login",
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: () => <Icon type="Octicons" name="person" size={20} />
    }
  }
);

export default AuthTab;
