import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

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
                            source={require("../../../../assets/AGACHAMENTO_5.jpg")}
                            imageProps={{ overlayContainerStyle: { backgroundColor: 'transparent' } }}
                        />

                        <Button
                            title="Saiba Mais"
                            onPress={() => navigation.navigate("Agachamento")}
                            icon={
                                <Icon
                                    name="checkmark-circle-outline"
                                    type="ionicon"
                                    color="#ffffff"
                                    iconStyle={{ marginLeft: 10 }}
                                />
                            }
                            iconRight
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
                            icon={
                                <Icon
                                    name="checkmark-circle-outline"
                                    type="ionicon"
                                    color="#ffffff"
                                    iconStyle={{ marginLeft: 10 }}
                                />
                            }
                            iconRight
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
                            icon={
                                <Icon
                                    name="checkmark-circle-outline"
                                    type="ionicon"
                                    color="#ffffff"
                                    iconStyle={{ marginLeft: 10 }}
                                />
                            }
                            iconRight
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
      backgroundColor: '#ecf0f1',
    },
    card: {
      marginBottom: 20, // Defina o valor desejado para aumentar o espaçamento
    },
    cardImage: {
      width: '100%',
      height: 300,
      marginBottom: 10,
    },
  });

export default Exercicios;