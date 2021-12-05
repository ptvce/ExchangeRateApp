import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function TabEUR() {
    const [exchangeRate, setExchange] = useState({

    });

    useEffect(() => {
        async function getExchangeRate() {
            const exchangeRates = await axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=9fb6a20f6e892f7f00e6d5f4a4013a71&base=EUR&symbols=GBP,JPY,EUR,AUD,CAD,USD');
            setExchange(exchangeRates.data.rates);
        }

        getExchangeRate().catch(console.error);
    }, []);

    useEffect(() => {
        console.log(exchangeRate);
    }, [exchangeRate]);


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <Image style={styles.img} source={
                    require('../assets/images/flags/1x1/eu.svg')
                } />
                EUR:
                <Text style={styles.number}>€ {exchangeRate.EUR}</Text>
            </Text>
            <Text style={styles.title}>
                {/* <Image style={styles.img} source={
                    require('../assets/images/w2560/gb.png')
                } /> */}
                GBP:
                <Text style={styles.number}>£ {exchangeRate.GBP}</Text>
            </Text>
            <Text style={styles.title}>
                {/* <Image style={styles.img} source={
                    require('../assets/images/w2560/jp.png')
                } /> */}
                JPY:
                <Text style={styles.number}>¥ {exchangeRate.JPY}</Text>
            </Text>
            <Text style={styles.title}>
                {/* <Image style={styles.img} source={
                    require('../assets/images/w2560/us.png')
                } /> */}
                USD:
                <Text style={styles.number}>$ {exchangeRate.USD}</Text>
            </Text>
            <Text style={styles.title}>
                {/* <Image style={styles.img} source={
                    require('../assets/images/w2560/au.png')
                } /> */}
                AUD:
                <Text style={styles.number}>A$ {exchangeRate.AUD}</Text>
            </Text>
            <Text style={styles.title}>
                {/* <Image style={styles.img} source={
                    require('../assets/images/w2560/ca.png')
                } /> */}
                CAD:
                <Text style={styles.number}>CA$ {exchangeRate.CAD}</Text>
            </Text>
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
    title: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#CECECE',
        height: 50,
        width: 300,
        paddingTop: 3,
        alignItems: 'center',
        marginVertical: hp('2%'),
        justifyContent: 'space-between'

    },
    number: {
        marginLeft: 80
    },
    img: {
        height: hp('5%'),
        width: wp('8%'),
        marginLeft: 3,
        marginTop: 3

    }
});