import React from "react";
import { View, Text, Image } from "react-native";

export default function Skipping() {
    return (
        <View>

            <View>
                <Image source={require("../../../../assets/Imagens/2-Skipping/Skipping.gif")}/>
                <Text>Flexão de quadril = iliopsas, reto femoral</Text>
                <Text>Flexão de joelho = isquiotibiais (posteriores da coxa)</Text>
                <Text>Extensão de tornozelo = gastrocnêmio e sóleo (panturrilha)</Text>
            </View>

        </View>
    )
}