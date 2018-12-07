import React from "react"
import {View, Text, StyleSheet} from "react-native"
import {createStackNavigator, createAppContainer} from "react-navigation"
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import LeftTab from "../components/LeftTab.react"
import RightTab from "../components/RightTab.react"
import Welcome from "../components/Welcome.react"
import Details from "../components/Details.react"
import AppHeader from "../components/AppHeader.react"

const TabNavigator = createBottomTabNavigator({
  Info: {
    screen: LeftTab,
    navigationOptions: {
      tabBarLabel: ({focused}) => focused ? <Text style={{color: '#fff', textAlign: 'center'}}>Info</Text> : null,
      tabBarIcon: ({tintColor}) => <Icon name='information-outline' color={tintColor} size={32} />
    }
  },
  Home: {
    screen: Welcome,
    navigationOptions: {
      tabBarLabel: ({focused}) => focused ? <Text style={{color: '#fff', textAlign: 'center'}}>Schedule</Text> : null,
      tabBarIcon: ({tintColor}) => <Icon name='calendar' color={tintColor} size={32} />
    }
  },
  Map: {
    screen: RightTab,
    navigationOptions: {
      header: AppHeader,
      tabBarLabel: ({focused}) => focused ? <Text style={{color: '#fff', textAlign: 'center'}}>Map</Text> : null,
      tabBarIcon: ({focused, tintColor}) => <Icon name='map-marker' color={tintColor} size={focused ? 30 : 25} />
    }
  }
},{
  swipeEnabled: true,
  tabBarComponent: props => {
    const backgroundColors = ['#4caf50', '#2196f3', '#c79100']

    return (
      <BottomTabBar
        {...props}
        style={{ height: 80, paddingBottom: 10, paddingTop: 20, backgroundColor: backgroundColors[props.navigation.state.index], alignItems: 'center', justifyContent: 'center' }}
      />
    );
  },
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#b7b7b7',
    labelStyle: {
      fontSize: 14,
    },
    showIcon: true
  }
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {header: AppHeader}
  },
  Details: {
    screen: Details,
    navigationOptions: {header: null}
  }
})

export default createAppContainer(AppNavigator)
