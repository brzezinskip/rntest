import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
    buttonContainer: {
        maxHeight: 60,
        flex: 1,
        minWidth: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFC357',
        paddingHorizontal: 20,
        borderRadius: 10,
    },

    buttonText: {
        fontSize: 23,
        color: '#7F6F52',
        textAlign: 'center',
    }
});

const buttonContent = (body) =>
    typeof body === "string" ?
        <Text style={styles.buttonText}>{body}</Text>
        : body;

export default Button = ({ onPress, body, customStyles }) => (
    (
        <TouchableOpacity onPress={onPress} style={[styles.buttonContainer, customStyles]}>
            {buttonContent(body)}
        </TouchableOpacity>
    )
)