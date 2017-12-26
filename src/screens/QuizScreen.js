import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Animated, Dimensions, Easing, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { answerQuestionAndNavigateToSummary } from '../actions';
import Header from '../components/Header';
import { container, welcomeText } from '../util/styles';

class QuizScreen extends Component {
    constructor(props) {
        super(props)
        this.viewHeightValue = new Animated.Value(0)
    }

    componentDidMount() {
        this.animate()
    }

    componentWillReceiveProps() {
        this.animate()
    }

    animate = () => {
        this.viewHeightValue.setValue(0)
        Animated.timing(
            this.viewHeightValue,
            {
                toValue: 1,
                duration: 2000,
                easing: Easing.linear
            }
        ).start();
    }
    render() {
        const opacity = this.viewHeightValue.interpolate({
            inputRange: [0, 0.5],
            outputRange: [0, 1]
        })
        const { questions: { fetchedQuestions, activeQuestion, answers }, navigation, answerQuestionAndNavigateToSummary } = this.props;
        if (!activeQuestion) { return <View style={styles.container} />; }
        return (
            <View style={container}>
                <Header text={activeQuestion.category} />
                <Animated.View style={[styles.textContainer, { opacity }]}>
                    <View style={styles.borderedText}>
                        <Text style={welcomeText}>
                            {activeQuestion.question}
                        </Text>
                        <Text style={styles.questionCount}>
                            {answers.length + 1} of {fetchedQuestions.length}
                        </Text>
                    </View>
                </Animated.View>
                <Footer buttons={[
                    {
                        onPress: () => answerQuestionAndNavigateToSummary(answers.length + 1, true),
                        body: "TRUE",
                        customStyles: [styles.button, styles.truthyButton]
                    },
                    {
                        onPress: () => answerQuestionAndNavigateToSummary(answers.length + 1, false),
                        body: "FALSE",
                        customStyles: [styles.button, styles.falsyButton]
                    }
                ]} />
            </View>
        )
    }
}

QuizScreen.propTypes = {
    questions: PropTypes.shape({
        fetchedQuestions: PropTypes.array.isRequired,
        activeQuestion: PropTypes.object,
        answers: PropTypes.array.isRequired,
    }),
    navigation: PropTypes.object.isRequired,
    answerQuestionAndNavigateToSummary: PropTypes.func,
}


const styles = StyleSheet.create({
    questionCount: {
        fontSize: 23,
        textAlign: 'center',
        color: '#7F622B',
    },
    textContainer: {
        flex: 3,
        justifyContent: 'space-around'
    },
    button: {
        maxWidth: (Dimensions.get('window').width / 2) - 40,
    },
    falsyButton: {
        backgroundColor: '#87323A'
    },
    truthyButton: {
        backgroundColor: "#FFC357"
    },
    borderedText: {
        borderWidth: 4,
        borderColor: "black",
        padding: 10,
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
