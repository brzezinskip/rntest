import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Header = ({ text }) =>
    <View style={styles.header}>
        <Text style={styles.headerText}>{text}</Text>
    </View>


const styles = StyleSheet.create({
    header: {
        height: 80,
        backgroundColor: '#FFDEA3',
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        color: '#7F622B',
    }
});
