import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { StatusBar } from "expo-status-bar";

export default function BemVindo() {
  const navigation = useNavigation();
  const containerAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(containerAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, []);

  const containerTranslate = containerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ADD8E6" />
      <View style={styles.titleContainer}>
        <Text style={styles.title1}>Bem-vindo!</Text>
      </View>
      <Animated.View
        style={[
          styles.container1,
          { transform: [{ translateY: containerTranslate }] },
        ]}
      >
        <LottieView
          source={require('../../../../assets/141620-single-line-sports-mane-animation.json')}
          autoPlay
          loop
          style={{ width: 280, height: 300 }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Exercicios")}
        >
          <Text style={styles.buttonText}>Vamos começar?</Text>
          <Feather name="arrow-right" size={24} color="#000" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ADD8E6",
    paddingTop: 50,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  container1: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#F5F5F5",
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title1: {
    fontSize: 50,
    fontWeight: "bold",
    marginRight: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginRight: 10,
  },
  button: {
    width: "100%",
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginTop:100,
  },
});