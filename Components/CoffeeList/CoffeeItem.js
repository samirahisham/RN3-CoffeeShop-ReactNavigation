import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// NativeBase Components
import { ListItem, Card, CardItem, Thumbnail, Text, Left } from "native-base";

// Style
import styles from "./styles";

const CoffeeItem = ({ cafe,navigation }) => {
  const handlePress = () => {
    navigation.navigate("CoffeeDetail", {
      coffeeID: cafe.id
    });
  };
  return (
    <ImageBackground
      source={{ uri: cafe.background }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <ListItem button onPress={handlePress} style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Left>
              <Thumbnail
                bordered
                source={{ uri: cafe.img }}
                style={styles.thumbnail}
              />
              <Text style={styles.text}>{cafe.name}</Text>
              <Text note style={styles.text}>
                {cafe.distance}
              </Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default CoffeeItem;
