import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function AgachamentoIso() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.gif}
          source={require("../../../../assets/agachamento-na-parede-isometrico.jpg")}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.text}>
        Exercício isométrico (sem movimento) = quadríceps, glúteos
      </Text>
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
    borderWidth: 3,
    borderColor: "#0000FF",
    marginTop: 80,
    marginBottom: 50,
    width: "54%",
    height: "50%",
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
  },
});
