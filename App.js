import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Login from './Components/Login';
import Home from './Components/Home';
import Profile from './Components/Profile';
import UserDetails from './Components/userDetails';
import AuthLoading from './Components/AuthLoading';
import Register from './Components/Register';
import Friends from './Components/Friends';

const homeNavigator = createStackNavigator(
  {
    home: {
      screen: Home,
    },
    userDetails: {
      screen: UserDetails
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'salmon',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
)

const profileNavigator = createStackNavigator({
  profile: Profile
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'salmon',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

const friendsNavigator = createStackNavigator({
  friends: {
    screen: Friends,
  },
  userDetails: {
    screen: UserDetails
  },
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: 'salmon',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})

const AppNavigator = createBottomTabNavigator({
  home: homeNavigator,
  friends: friendsNavigator,
  profile: profileNavigator,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'home') {
          iconName = `home`;
        } else if (routeName === 'profile') {
          iconName = `user`;
        }
        else if (routeName === 'friends') {
          iconName = `users`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
  // {
  //   initialRouteName: 'home',
  // },
  // {
  //   defaultNavigationOptions: {
  //     tabBarLabel: 'Home!',
  //   },
  //   tabBarOption: {
  //     activeTintColor: '#e91e63',
  //     swipeEnabled: true,
  //   }
  // });
);

const AuthNavigator = createBottomTabNavigator({
  login: Login,
  register: Register,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'login') {
          iconName = `home`;
        } else if (routeName === 'register') {
          iconName = `user`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      swipeEnabled: true
    },
  }
);



// const profileNavigator = createStackNavigator({
//   profile: { screen: Profile }
// }, {
//   navigationOptions: ({ navigation }) => ({
//     headerStyle: {
//       backgroundColor: "#512DA8"
//     },
//     headerTitleStyle: {
//       color: "#fff"
//     },
//     headerTintColor: "#fff"
//   })
// });

// const MainNavigator = createDrawerNavigator({
//   home:
//   {
//     screen: AppNavigator,
//   },
//   profile:
//   {
//     screen: Profile
//   }
// });



const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      authLoading: AuthLoading,
      app: AppNavigator,
      auth: AuthNavigator,
    },
    {
      initialRouteName: 'authLoading',
    }
  )
);

const App = () => {
  return (
    <AppContainer />
  );
}



export default App;
