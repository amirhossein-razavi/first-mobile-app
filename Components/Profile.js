import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Username: '',
            Email: '' || 'amirhosseinrazavi_76@yahoo.com',
        }
    }

    static navigationOptions = {
        title: 'Profile',
    };

    componentDidMount() {
        AsyncStorage.getItem('currentUser', (err, data) => {
            if (err) {
                console.log('error', err)
            } else {
                const newUser = JSON.parse(data)
                this.setState({
                    Username: newUser.Username,
                    Email: newUser.Email,
                })
            }
        });
    }


    render() {
        const { Username, Email } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Image source={require('../src/assets/7.jpg')} style={{ width: 100, height: 100, borderRadius: 50, marginLeft: 10 }} />
                    </View>
                    <View style={{ flex: 3 }}>
                        <View style={styles.detailsBox}>
                            <View style={styles.details}>
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>223</Text>
                                <Text style={{ fontSize: 15 }}>posts</Text>
                            </View>
                            <View style={styles.details}>
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>23523</Text>
                                <Text style={{ fontSize: 15 }}>Foloowers</Text>
                            </View>
                            <View style={styles.details}>
                                <Text style={{ fontWeight: "bold", fontSize: 18 }}>2547</Text>
                                <Text style={{ fontSize: 15 }}>Followings</Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 30 }}>
                            <Text style={styles.followButton}>Edit Profile</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{Username}</Text>
                    <Text style={{ fontSize: 17 }}>{Email}</Text>
                </View>
                <View style={styles.posts}></View>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
    },
    header: {
        flex: 2,
        flexDirection: 'row'
    },
    info: {
        flex: 1,
        padding: 10,
        justifyContent: "center"
    },
    posts: {
        flex: 5,
        backgroundColor: 'green'
    },
    details: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    detailsBox: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center",
    },
    followButton: {
        // height: 40,
        borderRadius: 5,
        padding: 5,
        color: '#222',
        fontSize: 18,
        backgroundColor: '#bbb',
        textAlign: "center",
        alignContent: "center",
        marginLeft: 20
    }
})

export default profile;
