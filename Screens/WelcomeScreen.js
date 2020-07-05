// Default imports
import React from 'react';
import {
    Text,
    View, 
    StyleSheet, 
    ImageBackground,
    Image,
    TouchableOpacity
     }
    from 'react-native';

// Navigation
import { NavigationContainer, StackActions } from '@react-navigation/native';

// Initial screen where the app opens to
function WelcomeScreen({ navigation }) {
    return(

        // Background Image
        <ImageBackground
        style={styles.background}
            source={require('../assets/homescreen.jpg')}        
        >
        {/* Logo Image */}
        <Image 
            source={require('../assets/googlelogo2.png')}
            style={styles.logo}
        />

        {/* Buttons */}
        <TouchableOpacity
            style={styles.registerButton}

        >

        
            <Text
                style={styles.registerText}
            >
                REGISTER HERE
            </Text>

        </TouchableOpacity>
        
        <TouchableOpacity
            style={styles.loginButton}
            onPress={() => navigation.navigate('LoginScreen')}
        >


            <Text
                style={styles.loginText}
            >
                LOGIN HERE
            </Text>

        </TouchableOpacity>

        </ImageBackground>
        
    );
}


// StyleSheet
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "center",
    },


    loginButton: {
        height: 70,
        width: '100%',
        backgroundColor: '#ff69b4',
        justifyContent: 'center',
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    loginText: {
        color: '#fdfd96',
    },


    logo: {
        height: 100,
        width: 100,
        position: "absolute",
        top: 130,
    },


    registerButton: {
        backgroundColor: '#00ff7f',
        height: 70,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent:"center",
        alignItems: "center",
    },
    registerText: {
        color: '#ff00ff'
    }
});

export default WelcomeScreen;