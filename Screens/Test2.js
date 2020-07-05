// Default imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Navigation
import { NavigationContainer, StackActions } from '@react-navigation/native';

// Login Screen after user presses login icon at WelcomeScreen.js
function LoginScreen(navigation) {
    return(
        <View
            style={styles.LoginScreen}
        >
            <Text>
                DIEIDIEDIE!!!
            </Text>
        </View>
    );
}

// StyleSheet
const styles = StyleSheet.create({
    LoginScreen: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    }
})

export default LoginScreen;