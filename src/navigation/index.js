import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation"

import Details from "../components/Details.react"
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
  Greeting: {screen: Greeting},
  Details: {screen: Details}
})

export default createAppContainer(AppNavigator)
