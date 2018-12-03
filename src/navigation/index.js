import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation"

import Welcome from "../components/Welcome.react"
import Greeting from "../components/Greeting.react"

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Welcome
  },
  Greeting: {screen: Greeting}
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {header: null}
  },
  Greeting: {screen: Greeting}
})

export default createAppContainer(AppNavigator)
