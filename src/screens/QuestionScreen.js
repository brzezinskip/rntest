import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default QuestionScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Welcome to Question Screen!
        </Text>
        <Button
            onPress={() => navigation.navigate('Summary')}
            title="Go to summary"
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
