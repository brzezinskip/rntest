import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { answerQuestionAndNavigateToSummary } from '../actions';

const QuizScreen = (props) => {
    const { questions: { questions, activeQuestion, answers }, navigation, answerQuestionAndNavigateToSummary } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                {activeQuestion.category}
            </Text>
            <Text style={styles.welcome}>
                {activeQuestion.question}
            </Text>
            <Button
                onPress={() => answerQuestionAndNavigateToSummary(answers.length + 1, true)}
                title="TRUE"
            />
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
        answerQuestionAndNavigateToSummary: (answersCount, answer) => dispatch(answerQuestionAndNavigateToSummary(answersCount, answer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen)