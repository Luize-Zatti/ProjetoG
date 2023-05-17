import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function AbdominalB() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.gif}
          source={require("../../../../assets/abdominalBorboleta.gif")}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>Flechão de coluna = abdome.</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#DCDCDC",
    flex: 1,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#0000FF",
    marginTop: 150,
    marginBottom: 50,
    width: "90%",
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
  },
});