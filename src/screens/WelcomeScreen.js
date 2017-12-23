import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import fetchQuestionsFromAPI from '../actions';
import Button from '../common/Button';

const buttonBody = (isFetching) =>
    isFetching ? (
        <ActivityIndicator size="large" />
    ) :
        "Tap to start quiz!"

const WelcomeScreen = (props) => {
    const { questions: { questions, isFetching }, navigation } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to the Trivia Challenge!
            </Text>
            <Button
                onPress={props.getQuestions}
                body={buttonBody(isFetching)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDEA3',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        color: '#7F622B',
    }
});


function mapStateToProps(state) {
    return {
        questions: state.questions,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getQuestions: () => dispatch(fetchQuestionsFromAPI())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen)
