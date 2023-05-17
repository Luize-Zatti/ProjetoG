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
                            source={require("../../../../assets/Agachamento.jpg")}
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
                            source={require("../../../../assets/Skipping.jpg")}
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
                            source={require("../../../../assets/abdominalBorb.jpg")}
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
                            source={require("../../../../assets/Ponte.jpg")}
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
                            source={require("../../../../assets/agachcSalto.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Agachamento com Salto")}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>TRÍCEPS NO BANCO</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/tricepsBanco.jpeg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Tríceps no Banco")}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>SALTO DE CORDA</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/saltodeCorda.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Salto com corda")}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>PRANCHA</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/prancha.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Prancha")}
                        />
                    </Card>
                    
                    <Card containerStyle={styles.card}>
                        <Card.Title>PANTURRILHA EM PÉ</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/exercicios-para-panturrilha.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Panturrilha em pé")}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>AGACHAMENTO ISOMÉTRICO</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/agachamentoIsometrico.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Agachamento isométrico")}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>POLICHINELO</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/teste1Poli.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Polichinelo")}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>AVANÇO</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/avanco.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Avanço")}
                        />
                    </Card>

                    <Card containerStyle={styles.card}>
                        <Card.Title>MOBILIDADE DA ESCÁPULA</Card.Title>
                        <Card.Divider />
                        <Card.Image
                            style={styles.cardImage}
                            source={require("../../../../assets/escapula.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Mobilidade de Escápula")}
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