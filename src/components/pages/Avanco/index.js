import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Avanco() {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.gif}
                    source={require("../../../../assets/avanco.gif")}
                    resizeMode="cover"
                />
            </View>
            <Text style={styles.text}>Extensão de quadril = glúteos.</Text>
            <Text style={styles.text}>Extensão de joelhos = quadríceps.</Text>
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
        marginTop: 50,
        marginBottom: 50,
    },
    gif: {
        width: 400,
        height: 400,
    },
    text: {
        color: "black",
        fontSize: 23,
        fontWeight: "400",
        textAlign: "center",
        marginBottom: 10,
    },
});