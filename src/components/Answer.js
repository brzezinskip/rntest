import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default Answer = ({ question, correct }) => (
    (
        <View style={styles.container}>
            <Text style={[correct ? styles.correct : styles.incorrect, styles.buttonText]}>
                <Text style={{ fontSize: 35 }}>{correct ? "+" : "-"}</Text> {question}
            </Text>
        </View>
    )
)


const styles = StyleSheet.create({
    container: {
        padding: 5,
    },
    buttonText: {
        fontSize: 25,
        flex: 1,
    },
    correct: {
        color: 'green'
    },
    incorrect: {
        color: 'red'
    }
});