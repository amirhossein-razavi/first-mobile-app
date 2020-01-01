import React, { Component } from 'react';
import { StyleSheet, View, Text, ActivityIndicator, ScrollView, TouchableHighlight, Image, Modal, Alert } from 'react-native';
import { ListItem, Card } from 'react-native-elements';
import axios from 'axios';
import Data from '../src/Data/users.json';
import Icon from 'react-native-vector-icons/FontAwesome5';


class UsersList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: Data,
            loading: true,
            modalVisible: false,
            selectedUser: {},
            like: false,
            showComments: false,
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
        }, 2)

    }

    render() {
        const { users, loading, selectedUser } = this.state;
        const { like, showComments } = this.state;
        const list = users.map((l, index) => {
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
                    <Card containerStyle={styles.card}>
                        <ListItem
                            key={index}
                            leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
                            title={l.name}
                            subtitle={l.username}
                            // chevron
                            // badge={{ value: index, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
                            onPress={() => this.props.navigation.navigate('userDetails', { userID: l.id })}
                        />
                        <Image borderRadius={5} source={require('../src/assets/post.jpeg')} resizeMode="cover" style={{ width: 350 }}></Image>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{l.name}</Text>
                            <Text style={{ lineHeight: 20, marginTop: 5 }}>Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of
                                  type and scrambled it to make a type specimen
                                  book. It has survived not only five centuries,
                                   but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised
                                     in the 1960s with the release of Letraset sheets
                                     containing
                                     </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {like
                                ? <Icon name={'heart'} color={'red'} size={23} style={styles.likeIcon} solid onPress={() => this.setState({ like: !like })}></Icon>
                                : <Icon name={'heart'} color={'red'} size={23} style={styles.likeIcon} light onPress={() => this.setState({ like: !like })}></Icon>
                            }
                            <Icon name={'comment'} color={'#555'} size={23} style={styles.likeIcon} light onPress={() => this.setState({ showComments: !showComments })}></Icon>
                        </View>
                        {showComments && users.map((u, i) => {
                            return (
                                <>
                                    <ListItem
                                        key={i}
                                        leftAvatar={{ source: require('../src/assets/6.jpg') }}
                                        title={u.name}
                                        subtitle={u.username}
                                    />
                                    <Text style={styles.comment}>
                                        Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s,
                                     when an unknown printer took a galley of
                                      type and scrambled it to make a type specimen
                                  </Text>
                                </>
                            )
                        })}
                    </Card >

                    <Card containerStyle={styles.card}>
                        <ListItem
                            key={index}
                            leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
                            title={l.name}
                            subtitle={l.username}
                            // chevron
                            // badge={{ value: index, textStyle: { color: 'white' }, containerStyle: { marginTop: -23 } }}
                            onPress={() => this.props.navigation.navigate('userDetails', { userID: l.id })}
                        />
                        <Image borderRadius={5} source={require('../src/assets/post2.jpg')} resizeMode="cover" style={{ width: 350, height: 350 }}></Image>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{l.name}</Text>
                            <Text style={{ lineHeight: 20, marginTop: 5 }}>Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of
                                  type and scrambled it to make a type specimen
                                  book. It has survived not only five centuries,
                                   but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised
                                     in the 1960s with the release of Letraset sheets
                                     containing
                                     </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {like
                                ? <Icon name={'heart'} color={'red'} size={23} style={styles.likeIcon} solid onPress={() => this.setState({ like: !like })}></Icon>
                                : <Icon name={'heart'} color={'red'} size={23} style={styles.likeIcon} light onPress={() => this.setState({ like: !like })}></Icon>
                            }
                            <Icon name={'comment'} color={'#555'} size={23} style={styles.likeIcon} light onPress={() => this.setState({ showComments: !showComments })}></Icon>
                        </View>
                        {showComments && users.map((u, i) => {
                            return (
                                <>
                                    <ListItem
                                        key={i}
                                        leftAvatar={{ source: require('../src/assets/6.jpg') }}
                                        title={u.name}
                                        subtitle={u.username}
                                    />
                                    <Text style={styles.comment}>
                                        Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of
                                  type and scrambled it to make a type specimen
                                  </Text>
                                </>
                            )
                        })}
                    </Card >

                    <Card containerStyle={styles.card}>
                        <ListItem
                            key={index}
                            leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
                            title={l.name}
                            subtitle={l.username}
                            // chevron
                            // badge={{ value: index, textStyle: { color: 'white' }, containerStyle: { marginTop: -23 } }}
                            onPress={() => this.props.navigation.navigate('userDetails', { userID: l.id })}
                        />
                        <Image borderRadius={5} source={require('../src/assets/post3.jpg')} resizeMode="cover" style={{ width: 350, height: 350 }}></Image>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{l.name}</Text>
                            <Text style={{ lineHeight: 20, marginTop: 5 }}>Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of
                                  type and scrambled it to make a type specimen
                                  book. It has survived not only five centuries,
                                   but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised
                                     in the 1960s with the release of Letraset sheets
                                     containing
                                     </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {like
                                ? <Icon name={'heart'} color={'red'} size={23} style={styles.likeIcon} solid onPress={() => this.setState({ like: !like })}></Icon>
                                : <Icon name={'heart'} color={'red'} size={23} style={styles.likeIcon} light onPress={() => this.setState({ like: !like })}></Icon>
                            }
                            <Icon name={'comment'} color={'#555'} size={23} style={styles.likeIcon} light onPress={() => this.setState({ showComments: !showComments })}></Icon>
                        </View>
                        {showComments && users.map((u, i) => {
                            return (
                                <>
                                    <ListItem
                                        key={i}
                                        leftAvatar={{ source: require('../src/assets/6.jpg') }}
                                        title={u.name}
                                        subtitle={u.username}
                                    />
                                    <Text style={styles.comment}>
                                        Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of
                                  type and scrambled it to make a type specimen
                                  </Text>
                                </>
                            )
                        })}
                    </Card >

                    <Card containerStyle={styles.card}>
                        <ListItem
                            key={index}
                            leftAvatar={{ source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' } }}
                            title={l.name}
                            subtitle={l.username}
                            // chevron
                            // badge={{ value: index, textStyle: { color: 'white' }, containerStyle: { marginTop: -23 } }}
                            onPress={() => this.props.navigation.navigate('userDetails', { userID: l.id })}
                        />
                        <Image borderRadius={5} source={require('../src/assets/post4.jpg')} resizeMode="cover" style={{ width: 350, height: 350 }}></Image>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{l.name}</Text>
                            <Text style={{ lineHeight: 20, marginTop: 5 }}>Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of
                                  type and scrambled it to make a type specimen
                                  book. It has survived not only five centuries,
                                   but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised
                                     in the 1960s with the release of Letraset sheets
                                     containing
                                     </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            {like
                                ? <Icon name={'heart'} color={'red'} size={23} style={styles.likeIcon} solid onPress={() => this.setState({ like: !like })}></Icon>
                                : <Icon name={'heart'} color={'red'} size={23} style={styles.likeIcon} light onPress={() => this.setState({ like: !like })}></Icon>
                            }
                            <Icon name={'comment'} color={'#555'} size={23} style={styles.likeIcon} light onPress={() => this.setState({ showComments: !showComments })}></Icon>
                        </View>
                        {showComments && users.map((u, i) => {
                            return (
                                <>
                                    <ListItem
                                        key={i}
                                        leftAvatar={{ source: require('../src/assets/6.jpg') }}
                                        title={u.name}
                                        subtitle={u.username}
                                    />
                                    <Text style={styles.comment}>
                                        Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s,
                                 when an unknown printer took a galley of
                                  type and scrambled it to make a type specimen
                                  </Text>
                                </>
                            )
                        })}
                    </Card >
                </>

            )
        });
        return (
            <>
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
            </>
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
    card: {
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    },
    likeIcon: {
        padding: 10,
    },
    comment: {
        paddingLeft: 20,
        paddingBottom: 20,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderColor: '#bbb',
        lineHeight: 20
    }
});



export default UsersList;
