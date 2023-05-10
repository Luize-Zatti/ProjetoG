import React from "react";
import { View, Text, Image } from "react-native";

export default function Agachamento() {
    return (
        <View>

            <View>
                <Text>Agachamento</Text>
                <Image source={require('../../../../assets/agachamento-livre.jpg')}/>
                <Text> Extensão de quadril = glúteos. </Text>
                <Text> Extensão de joelhos = quadríceps. </Text>
            </View>

        </View>
    )
}