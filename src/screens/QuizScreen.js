import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    Easing,
    Dimensions,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { answerQuestionAndNavigateToSummary } from '../actions';
import Button from '../common/Button';

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
        const { questions: { questions, activeQuestion, answers }, navigation, answerQuestionAndNavigateToSummary } = this.props;
        return (
            <View style={styles.container}>
                <Animated.View style={[styles.textContainer, { opacity }]}>
                    <Text style={styles.welcome}>
                        {activeQuestion.category}
                    </Text>
                    <Text style={styles.welcome}>
                        {activeQuestion.question}
                    </Text>
                </Animated.View>
                <View style={styles.buttonsContainer}>
                    <Button
                        onPress={() => answerQuestionAndNavigateToSummary(answers.length + 1, true)}
                        body="TRUE"
                        customStyles={[styles.button, styles.truthyButton]}
                    />
                    <Button
                        onPress={() => answerQuestionAndNavigateToSummary(answers.length + 1, false)}
                        body="FALSE"
                        customStyles={[styles.button, styles.falsyButton]}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: '#FFDEA3',
    },
    buttonsContainer: {
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'space-around'
    },
    welcome: {
        fontSize: 30,
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