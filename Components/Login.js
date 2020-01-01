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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Password: '',
        }
    }


    static navigationOptions = {
        title: 'sign in'
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
        loginButton: {
            flex: 1,
            borderWidth: 2,
            borderRadius: 10,
            height: 50,
            marginTop: 10,
            marginHorizontal: 90,
            padding: 15,
            borderColor: '#28A745',
            backgroundColor: '#28A745',
            justifyContent: "center",
            alignItems: "center"
        },
        buttonText: {
            fontSize: 20,
            color: 'white',
            textAlign: "center"
        }
    });

    onLogin() {
        const { Username, Password } = this.state;
        const user = { Username, Password };

        AsyncStorage.getItem('users', (err, data) => {
            if (err) {
                console.log('error', err)
            } else {
                const users = JSON.parse(data)
                const validate = users.find(user => user.Username === Username && user.Password === Password);

                if (validate) {
                    AsyncStorage.setItem('currentUser', JSON.stringify(user))
                    this.props.navigation.navigate('app');
                } else {
                    Alert.alert('invalid Username or Password')
                }
            }
        })
    };

    render() {
        console.log(this.state)
        return (
            <View style={this.styles.container}>
                <ImageBackground source={require('../src/assets/grediant2.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={this.styles.loginForm}>
                        <View style={this.styles.box}>
                            <Text style={this.styles.header}>sign in</Text>
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
                            <TouchableHighlight underlayColor='gray' style={this.styles.loginButton} onPress={() => this.onLogin()}>
                                <Text style={this.styles.buttonText}>Login</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    };
}



export default Login;
