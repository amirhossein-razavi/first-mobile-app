import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    TextInput,
    Alert,
    AsyncStorage,
    ImageBackground 
} from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Password: '',
            Email: '',
            Phone: '',
        }
    }

    styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        box: {
            flexDirection: "row",
            margin: 15
        },
        loginForm: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        input: {
            flex: 1,
            borderWidth: 2,
            borderColor: '#ccc',
            borderRadius: 10,
            margin: 15,
            padding: 15,
            fontSize: 20,
            color: 'black'
        },
        header: {
            textAlign: "center",
            flex: 1,
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
        },
        registerButton: {
            flex: 1,
            borderWidth: 2,
            borderRadius: 10,
            height: 50,
            marginTop: 10,
            marginHorizontal: 90,
            padding: 15,
            borderColor: '#007BFF',
            backgroundColor: '#007BFF',
            justifyContent: "center",
            alignItems: "center"
        },
        buttonText: {
            fontSize: 20,
            color: 'white',
            textAlign: "center"
        }
    });

    onRegister() {
        const { Username, Password, Email, Phone } = this.state;
        const user = { Username, Password, Email, Phone };

        AsyncStorage.getItem('users', (err, data) => {
            if (err) {
                console.log('error', err)
            } else {
                const users = JSON.parse(data)
                if (users) {
                    const userExist = users.find(user => user.Username === Username);
                    console.log(userExist)

                    if (userExist) {
                        Alert.alert('This Username exists')
                    } else {
                        const newUsers = [
                            ...users,
                            user
                        ]
                        AsyncStorage.setItem('currentUser', JSON.stringify(user))
                        AsyncStorage.setItem('users', JSON.stringify(newUsers))
                        this.props.navigation.navigate('app');
                    }
                } else {
                    const newUser = [user];
                    AsyncStorage.setItem('currentUser', JSON.stringify(user))
                    AsyncStorage.setItem('users', JSON.stringify(newUser))
                    this.props.navigation.navigate('app');
                }
            }

        })
    };

    render() {
        return (
            <View style={this.styles.container}>
                <ImageBackground source={require('../src/assets/grediant.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={this.styles.loginForm}>
                    <View style={this.styles.box}>
                        <Text style={this.styles.header}>Register</Text>
                    </View>
                    <View style={this.styles.box}>
                        <Input
                            placeholder='Enter your Username'
                            leftIcon={
                                <Icon
                                    name='user'
                                    size={24}
                                    color='#ccc'
                                    style={{ marginRight: 20 }}
                                />
                            }
                            onChangeText={(Username) => this.setState({ Username })}
                        />
                    </View>
                    <View style={this.styles.box}>
                        <Input
                            placeholder='Enter your Password'
                            leftIcon={
                                <Icon
                                    name='lock'
                                    size={24}
                                    color='#ccc'
                                    style={{ marginRight: 20 }}
                                />
                            }
                            onChangeText={(Password) => this.setState({ Password })}
                        />
                    </View>
                    <View style={this.styles.box}>
                        <Input
                            placeholder='Enter your phone number'
                            leftIcon={
                                <Icon
                                    name='phone'
                                    size={24}
                                    color='#ccc'
                                    style={{ marginRight: 20 }}
                                />
                            }
                            onChangeText={(Phone) => this.setState({ Phone })}
                        />
                    </View>
                    <View style={this.styles.box}>
                        <Input
                            placeholder='Enter your email'
                            leftIcon={
                                <Icon
                                    name='envelope'
                                    size={24}
                                    color='#ccc'
                                    style={{ marginRight: 20 }}
                                    keyboardType='number-pad'
                                />
                            }
                            onChangeText={(Email) => this.setState({ Email })}
                        />
                    </View>
                    <View style={this.styles.box}>
                        <TouchableHighlight underlayColor='gray' style={this.styles.registerButton} onPress={() => this.onRegister()}>
                            <Text style={this.styles.buttonText}>register</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                </ImageBackground>
            </View>
        );
    };
}



export default Register;
