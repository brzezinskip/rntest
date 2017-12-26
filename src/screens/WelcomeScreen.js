import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { fetchQuestionsFromAPI } from '../actions';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { container, welcomeText } from '../util/styles';

const buttonBody = (isFetching) =>
    isFetching ? (
        <ActivityIndicator size="large" />
    ) :
        "Tap to start quiz!";

const WelcomeScreen = (props) => {
    const { questions: { isFetching }, navigation, getQuestions } = props;

    return (
        <View style={container}>
            <Header text="Welcome to the Trivia Challenge!" />
            <Text style={welcomeText}>
                You will be presented with 10 True or False questions.
            </Text>
            <Text style={welcomeText}>
                Can you score 100%?
            </Text>
            <Footer buttons={[{
                onPress: getQuestions,
                body: buttonBody(isFetching),
            }]} />
        </View>
    )
}

WelcomeScreen.propTypes = {
    questions: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
    }),
    navigation: PropTypes.object.isRequired,
    getQuestions: PropTypes.func.isRequired,
}

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
