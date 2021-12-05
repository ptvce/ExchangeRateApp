import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function TabUSD() {

    const [exchangeRate, setExchange] = useState({

    });

    useEffect(() => {
        async function getExchangeRate() {
            const exchangeRates = await axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=9fb6a20f6e892f7f00e6d5f4a4013a71&base=EUR&symbols=GBP,JPY,EUR,AUD,CAD');
            setExchange(exchangeRates.data.rates);
        }

        getExchangeRate().catch(console.error);
    }, []);

    useEffect(() => {
        console.log(exchangeRate);
    }, [exchangeRate]);


    return (
        <View style={styles.container}>

            {/* <Text style={styles.title}>
                <Image style={styles.img} source={{
                    uri: "https://picsum.photos/200/300"
                }} />
                USD:
                <Text style={styles.number}>$ {exchangeRate.USD}</Text>
            </Text>
            <Text style={styles.title}>
                <Image style={styles.img} source={{
                    uri: "https://picsum.photos/200/300"
                }} />
                GBP:
                <Text style={styles.number}>£ {exchangeRate.GBP}</Text>
            </Text>
            <Text style={styles.title}>
                <Image style={styles.img} source={{
                    uri: "https://picsum.photos/200/300"
                }} />
                JPY:
                <Text style={styles.number}>¥ {exchangeRate.JPY}</Text>
            </Text>
            <Text style={styles.title}>
                <Image style={styles.img} source={{
                    uri: "https://picsum.photos/200/300"
                }} />
                EUR:
                <Text style={styles.number}>€ {exchangeRate.EUR}</Text>
            </Text>
            <Text style={styles.title}>
                <Image style={styles.img} source={{
                    uri: "https://picsum.photos/200/300"
                }} />
                AUD:
                <Text style={styles.number}>AU$ {exchangeRate.AUD}</Text>
            </Text>
            <Text style={styles.title}>
                <Image style={styles.img} source={{
                    uri: "https://picsum.photos/200/300"
                }} />
                CAD:
                <Text style={styles.number}>CA$ {exchangeRate.CAD}</Text>
            </Text> */}
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    titleText: {
        fontSize: 2,
        fontWeight: "bold",
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#CECECE',
        height: 50,
        width: 300,
        paddingTop: 3,
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between'

    },
    number: {
        marginLeft: 80
    },
    img: {
        width: 30,
        height: 30,
        marginLeft: 5,
        marginTop: 5

    }
});