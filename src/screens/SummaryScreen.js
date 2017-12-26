import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';

import { restartGame } from '../actions';
import Answer from '../components/Answer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { container } from '../util/styles';

const correctAnswersCount = (answers) => {
    return answers.reduce((acc, answer) => answer.correct ? acc + 1 : acc, 0)
}

const correctAnswerText = (answers) => `You scored ${correctAnswersCount(answers)}/${answers.length}`;

const SummaryScreen = ({ questions: { answers }, restartGame }) =>
    (
        <View style={container}>
            <Header text={correctAnswerText(answers)} />
            <ScrollView>
                {answers.map(answer => <Answer {...answer} key={answer.question} />)}
            </ScrollView>
            <Footer buttons={[{
                onPress: restartGame,
                body: 'Restart game',
            }]} />
        </View>
    )

SummaryScreen.propTypes = {
    questions: PropTypes.shape({
        answers: PropTypes.array.isRequired,
    }),
    restartGame: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
    return {
        questions: state.questions,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        restartGame: () => dispatch(restartGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryScreen)
