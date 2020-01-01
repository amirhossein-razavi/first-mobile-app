import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  View,
  StyleSheet
} from 'react-native';

class AuthLoading extends React.Component {
  componentDidMount() {
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('currentUser');
    this.props.navigation.navigate(userToken ? 'app' : 'auth');
  };


  render() {
    return (
      <View>
        <ActivityIndicator style={styles.loading} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    marginTop: 100,
  },
})

export default AuthLoading