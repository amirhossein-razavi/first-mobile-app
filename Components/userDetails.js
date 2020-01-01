import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Image, ActivityIndicator } from 'react-native';
import Data from '../src/Data/users.json'

class userDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: this.props.navigation.getParam('userID'),
            user: {},
            users: Data,
            loading: true,
        }
    }

    componentDidMount() {
        // await fetch(`https://jsonplaceholder.typicode.com/users/${this.state.userID}`)
        //     .then(response => response.json())
        //     .then(user => this.setState({
        //         user
        //     }))
        // await this.setState({
        //     loading: false,
        // })
        const { user, users, userID } = this.state;
        const newUser = users.find(u => u.id === userID);

        this.setState({
            user: newUser
        })

        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 1000)
    }

    static navigationOptions = {
        title: 'userDetails'
    }

    render() {
        const { user, loading } = this.state;
        return (
            <>
                {loading
                    ? <View style={styles.loading}>
                        <ActivityIndicator size="large"></ActivityIndicator>
                    </View>

                    : <View style={styles.container}>
                        <View style={styles.header}>
                            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                                <Image source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }} style={{ width: 100, height: 100, borderRadius: 50, marginLeft: 10 }} />
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
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user.name}</Text>
                            <Text style={{ fontSize: 17 }}>{user.username}</Text>
                        </View>
                        <View style={styles.posts}></View>
                    </View >}
            </>
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
    },
    loading: {
        flex: 1,
        marginTop: 100,
    },
})

export default userDetails;
