import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

export default function Prancha() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.gif}
          source={require("../../../../assets/PranchaT.jpg")}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>
        Exercício isométrico (sem movimento) = abdome, glúteo, eretores da coluna, deltóide, quadríceps.
      </Text>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    flex: 1,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#0000FF",
    marginTop: 150,
    marginBottom: 50,
    width: "79%",
    height: "32%",
  },
  gif: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  text: {
    color: "black",
    fontSize: 23,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 10,
    marginHorizontal:10,
  },
});