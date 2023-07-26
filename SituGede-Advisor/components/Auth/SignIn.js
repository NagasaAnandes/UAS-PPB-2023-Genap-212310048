import React, { Component } from 'react';
import {View, StyleSheet, Text, Image, StatusBar, SafeAreaView} from 'react-native';
import SignInForm from './SignInForm';

class SignIn extends Component {
    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <StatusBar/>
                <View style={styles.BackgroundHeader}>
                <Image
                    source={require('../../assets/SketchLake3.jpg')}
                    style={{...styles.BackgroundHeader, position: 'absolute'}} >
                </Image>
                    <Text style={styles.TitleHeader}>SIGN IN</Text>
                </View>
                <View style={styles.Footer}>
                   <SignInForm/>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },  
    BackgroundHeader: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#3A835F',
        borderBottomRightRadius: 75,
        borderBottomLeftRadius: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    TitleHeader: {
        textAlign:'center',
        fontWeight:'bold',
        fontSize:30,
        color: '#F5F5F5',
        justifyContent: 'center',
    },
    Body: {
        flex: 3
    },
    Footer: {
        justifyContent:'flex-end', 
        marginBottom:20, 
        flex: 4
    },
})

export default SignIn;
