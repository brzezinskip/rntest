import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { restartGame } from '../actions';
import Answer from '../common/Answer';
import Button from '../common/Button';

const correctAnswersCount = (answers) => {
    return answers.reduce((acc, answer) => answer.correct ? acc + 1 : acc, 0)
}

const SummaryScreen = (props) => {
    const { questions: { answers }, restartGame } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.score}>You scored {correctAnswersCount(answers)}/{answers.length}</Text>
            <ScrollView>
                {answers.map(answer => <Answer {...answer} key={answer.question} />)}
            </ScrollView>
            <Button onPress={restartGame} body='Restart game' />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFDEA3',
    },
    score: {
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
        restartGame: () => dispatch(restartGame())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryScreen)