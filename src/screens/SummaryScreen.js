import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { NavigationActions } from 'react-navigation'

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Welcome' })
    ]
});

export default SummaryScreen = ({ navigation }) => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Welcome to Summary Screen!
        </Text>
        <Button
            onPress={() => navigation.dispatch(resetAction)}
            title="Restart"
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
