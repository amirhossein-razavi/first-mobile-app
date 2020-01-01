import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, TouchableHighlight, Image, Modal, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';
import Data from '../src/Data/users.json'
import { TextInput } from 'react-native-gesture-handler';

class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: Data,
            loading: true,
            modalVisible: false,
            selectedUser: {},
            search: ''
        }
    }

    componentDidMount() {
        // await fetch('https://hplussport.com/api/products.php')
        //     .then(response => response.json())
        //     .then(users => console.log("sarb", users))
        //     .catch((err) => {
        //         console.log('new Error : ', err);
        //     })
        // await this.setState({
        //     loading: false,
        // })

        setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 1000)

    }

    static navigationOptions = {
        title: 'Friends',
    };

    render() {
        const { users, loading, selectedUser, search } = this.state;
        const filteredData = search && users.filter(u => u.name.includes(search)) || users;
        const list = filteredData.map((l, index) => {
            return (
                // <TouchableHighlight
                //     key={index}
                //     underlayColor='orange'
                //     style={styles.list}
                //     onPress={() => this.props.navigation.navigate('userDetails', { userID: user.id })}>
                //     <View style={styles.listDetail}>
                //         <View style={{ flex: 1, marginLeft: 30 }}>
                //             <Image style={styles.profileImages} source={require('../src/assets/6.jpg')} />
                //         </View>
                //         <View style={styles.nameInfo}>
                //             <Text style={styles.text}>{user.name}</Text>
                //             <Text style={styles.text}>{user.username}</Text>
                //         </View>
                //     </View>
                // </TouchableHighlight>
                <>
                    <ListItem
                        key={index + 1}
                        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
                        title={l.name}
                        subtitle={l.username}
                        bottomDivider
                        chevron
                        bottomDivider
                        badge={{ value: index + 1, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
                        onPress={() => this.props.navigation.navigate('userDetails', { userID: l.id })}
                    />
                    <ListItem
                        key={index + 11}
                        leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
                        title={l.name}
                        subtitle={l.username}
                        bottomDivider
                        chevron
                        bottomDivider
                        badge={{ value: index + 11, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
                        onPress={() => this.props.navigation.navigate('userDetails', { userID: l.id })}
                    />
                </>

            )
        });
        return (
            <ScrollView>
                <TextInput style={styles.searchBox} placeholder={'Search...'} onChangeText={(search) => this.setState({ search })} />
                {!loading && list}
                {
                    loading &&
                    <View style={styles.loading}>
                        <ActivityIndicator size="large"></ActivityIndicator>
                    </View>
                }
                {/* <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={styles.modalContainer}>
                        <Image style={styles.selectedImage} source={require('../src/assets/6.jpg')} />
                        <Text style={styles.selectedName}>{selectedUser.name}</Text>
                        <Text style={styles.userName}>email : {selectedUser.email}</Text>
                        <Text style={styles.userName}>phone : {selectedUser.phone}</Text>
                        <Text style={styles.userName}>website : {selectedUser.website}</Text>
                        <TouchableHighlight
                            underlayColor='orange'
                            onPress={() => {
                                this.setState({ modalVisible: !this.state.modalVisible });
                            }}>
                            <Text style={styles.modalButton}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>

                </Modal> */}
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loading: {
        flex: 1,
        marginTop: 100,
    },
    list: {
        flex: 1,
        borderBottomWidth: 2,
        borderColor: '#ccc',
        marginTop: 10,
        borderRadius: 10
    },
    text: {
        fontSize: 20,
    },
    profileImages: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginVertical: 10
    },
    listDetail: {
        flexDirection: "row",
    },
    modalContainer: {
        flex: 1,
        alignItems: "center",
    },
    selectedImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 40
    },
    selectedName: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20
    },
    userName: {
        fontSize: 20,
        marginTop: 10
    },
    nameInfo: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    modalButton: {
        marginTop: 30,
        borderWidth: 2,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        color: 'white',
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
    },
    searchBox: {
        flex: 1,
        // height: 40,
        borderBottomWidth: 2,
        borderColor: '#ccc',
        borderRadius: 10,
        margin: 15,
        paddingLeft: 15,
        fontSize: 20,
        color: '#444'
    }
});



export default UsersList;
