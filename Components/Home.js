import React, { Component } from 'react';
import { StyleSheet, View, Text, AsyncStorage, DrawerLayoutAndroid, ScrollView, Image, StatusBar } from 'react-native';
import Posts from './Posts';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Username: ''
        }
        this.onLogout = this.onLogout.bind(this);
    }


    componentDidMount() {

        //console all data in AsyncStorage
        AsyncStorage.getAllKeys().then((keyArray) => {
            AsyncStorage.multiGet(keyArray).then((keyValArray) => {
                let myStorage: any = {};
                for (let keyVal of keyValArray) {
                    myStorage[keyVal[0]] = keyVal[1]
                }

                console.log('CURRENT STORAGE: ', myStorage);
            })
        });


        AsyncStorage.getItem('currentUser', (err, data) => {
            if (err) {
                console.log('error', err)
            } else {
                const newUser = JSON.parse(data)
                this.setState({
                    Username: newUser.Username,
                })
            }
        });
    };

    static navigationOptions = {
        title: 'Home',
    };

    onLogout() {
        AsyncStorage.removeItem('currentUser');
        this.props.navigation.navigate('auth');
    }


    // static navigationOptions = {
    //     tabBarLabel: (tintColor) => {
    //         return (
    //             <View style={{ justifyContent: "center", alignItems: "center" }}>
    //                 <Text style={{ color: tintColor, fontSize: 15 }}>user</Text>
    //             </View>
    //         )
    //     },
    //     tabBarIcon: ({ tintColor }) => {
    //         return (
    //             <View style={{ justifyContent: "center", alignItems: "center" }}>
    //                 <Icon
    //                     name={'home'}
    //                     size={26}
    //                 />
    //             </View>
    //         )
    //     }
    // }

    // static navigationOptions = {
    //     drawerLabel: 'Home',
    //     drawerIcon: () => (
    //         <Image
    //             source={require('../src/assets/6.jpg')}
    //             style={{ tintColor: '#512DA8', width: 24, height: 24, }}
    //         />
    //     ),
    // };


    render() {
        const { Username } = this.state;
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <Icon name={'sign-out'} size={25} style={{ marginLeft: 20, textAlign: "right", padding: 20 }}
                    /*onPress={() => this.refs['myDrawer'].openDrawer()}*/
                    onPress={this.onLogout}
                ></Icon>
            </View>
        );
        return (
            <DrawerLayoutAndroid
                ref="myDrawer"
                id='sarb'
                drawerWidth={300}
                drawerPosition='left'
                renderNavigationView={() => navigationView}>
                <ScrollView style={{ flex: 1, backgroundColor: '#efefef' }}>
                    <StatusBar backgroundColor="salmon" barStyle="light-content" />
                    <View style={{ flexDirection: 'row', alignItems: "center", flex: 1 }}>
                        <View style={{ flex: 3 }}>
                            <Text style={styles.header}>Welcome {Username}</Text>
                        </View>
                    </View>
                    <Posts navigation={this.props.navigation} />
                </ScrollView>
            </DrawerLayoutAndroid>
        );
    }
};

const styles = StyleSheet.create({
    header: {
        fontSize: 23,
        fontWeight: "bold",
        padding: 10
    },
    drawerOpen: {
        fontSize: 35,
        marginLeft: 10
    }
})

export default Home;
