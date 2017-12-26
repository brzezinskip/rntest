import React from 'react';
import { StyleSheet, View } from 'react-native';

export default Footer = ({ buttons }) => (
    <View style={styles.container}>
        {buttons.map(button =>
            <Button
                key={button.body}
                onPress={button.onPress}
                body={button.body}
                customStyles={button.customStyles}
            />
        )}
    </View>
);


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 60,
        alignItems: 'flex-end',
        justifyContent: "space-around"
    }
});