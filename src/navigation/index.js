import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation"

import LeftTab from "../components/LeftTab.react"
import RightTab from "../components/RightTab.react"
import Welcome from "../components/Welcome.react"
import Details from "../components/Details.react"

const TabNavigator = createBottomTabNavigator({
  LeftTab: {screen: LeftTab},
  Home: {screen: Welcome},
  RightTab: {screen: RightTab}
})

const AppNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
    navigationOptions: {header: null}
  },
  Details: {screen: Details}
})

export default createAppContainer(AppNavigator)
