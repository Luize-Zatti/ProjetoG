import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons";

const Exercicios = () => {
    const navigation = useNavigation({navigator});

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.container}>
                    <Card containerStyle={styles.card}>
                        <Card.Title>AGACHAMENTO</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Agachamento")}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>SKIPPING</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/Imagens/2-Skipping/Skipping.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Skipping")}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>ABDOMINAL BORBOLETA</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/Imagens/3-AbdominalBorboleta/abdominalBorb.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Abdominal Borboleta")}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>PONTE</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/Imagens/4-Ponte/Ponte.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Ponte")}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>AGACHAMENTO COM SALTO</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/Imagens/5-AgachamentoComSalto/agachcSalto.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Agachamento com Salto")}
                        />
                    </Card>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: "#DCDCDC",
    },
    card: {
        marginBottom: 20,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: "#0000FF",
    },
    cardImage: {
        width: '100%',
        height: 300,
        marginBottom: 10,
    },
});

export default Exercicios;