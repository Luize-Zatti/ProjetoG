import React from "react";
import { View, Text, Image } from "react-native";

export default function AbdominalB(){
    return(
        <View>        
            <Image source={require("../../../../assets/Imagens/3-AbdominalBorboleta/abdominalBorboleta.gif")}/>
            <Text>Flexão de Coluna = abdome</Text>
        </View>
    )
}