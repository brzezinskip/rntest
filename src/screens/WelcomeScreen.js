import React, { Component } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import fetchQuestionsFromAPI from '../actions';

const WelcomeScreen = (props) => {
    const { questions: { questions, isFetching }, navigation } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Welcome to Main Screen!
        </Text>
            {isFetching && <Text style={{ color: 'blue' }}>ASD</Text>}
            <Button
                onPress={props.getQuestions}
                title="Get questions and start quiz!"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
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
