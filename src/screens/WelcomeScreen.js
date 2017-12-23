import React, { Component } from 'react';
import {
    Platform,
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default WelcomeScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Welcome to Main Screen!
        </Text>
        <Button
            onPress={() => navigation.navigate('Question')}
            title="Go to details"
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
