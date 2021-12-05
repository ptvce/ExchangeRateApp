import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';


export default function More() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>
                    A currency[a] in the most specific sense is money in any form when in use or circulation as a medium of exchange, especially circulating banknotes and coins.[1][2] A more general definition is that a currency is a system of money (monetary units) in common use, especially for people in a nation.[3] Under this definition, U.S. dollars (US$), euros (€), Indian rupee (₹), Japanese yen (¥), and pounds sterling (£) are examples of currencies. Currencies may act as stores of value and be traded between nations in foreign exchange markets, which determine the relative values of the different currencies.[4] Currencies in this sense are defined by governments, and each type has limited boundaries of acceptance.

                    Other definitions of the term "currency" appear in the respective synonymous articles: banknote, coin, and money. This article uses the definition which focuses on the currency systems of countries.

                    One can classify currencies into three monetary systems: fiat money, commodity money, and representative money, depending on what guarantees a currency's value (the economy at large vs. the government's physical metal reserves). Some currencies function as legal tender in certain political jurisdictions. Others simply get traded for their economic value.

                    Digital currency has arisen with the popularity of computers and the Internet. Whether digital notes and coins will be successfully developed remains dubious.[5] Decentralized digital currencies, such as cryptocurrencies are not legal currency, strictly speaking, since they are not issued by a government monetary authority and are not legal tender. Many warnings issued by various countries note the opportunities that cryptocurrencies create for illegal activities, such as money laundering and terrorism.[6] In 2014 the United States IRS issued a statement explaining that virtual currency is treated as property for Federal income-tax purposes and providing examples of how longstanding tax principles applicable to transactions involving property apply to virtual currency.[7]
                </Text>
            </ScrollView>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    scrollView: {
        marginHorizontal: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});