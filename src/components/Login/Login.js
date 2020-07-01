import React, { Component } from 'react';
import { StyleSheet, Text, View,
    Image, TouchableWithoutFeedback,
    StatusBar, TextInput, SafeAreaView,
    Keyboard, TouchableOpacity,
    KeyboardAvoidingView, 
    Platform} from 'react-native';

export default class Login extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <KeyboardAvoidingView 
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
                        style={styles.container}>
                    <TouchableWithoutFeedback 
                            style={styles.container} 
                            onPress={Keyboard.dismiss}>
                        <View style={styles.logoContainer}>
                            <View style={styles.logoContainer}>
                                <Text style={styles.logo}>Offline First</Text>
                                <Text style={styles.title}>Informações da Conta</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput 
                                    style={styles.input}
                                    placeholder='Digite o usuário/email'
                                    placeholderTextColor='rgba(255, 255, 255, 0.8)'
                                    keyboardType='email-address'
                                    returnKeyType='next'
                                    autoCorrect={false}
                                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <TextInput 
                                    style={styles.input}
                                    placeholder='Digite a senha'
                                    placeholderTextColor='rgba(255, 255, 255, 0.8)'
                                    returnKeyType='go'
                                    secureTextEntry={true}
                                    ref={'txtPassword'}
                                    onPress={Keyboard.dismiss}
                                />
                                <TouchableOpacity 
                                    style={styles.buttonContainer}
                                    activeOpacity={0.6}>
                                    <Text style={styles.buttonText}>Entrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>  
            </SafeAreaView>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 40,
        height: 56
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 200,
        padding: 20
        //backgroundColor: 'red'
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: '#FFF',
        marginBottom: 20,
        paddingHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32, 53, 70)',
        fontWeight: 'bold',
        fontSize: 18
    }
})