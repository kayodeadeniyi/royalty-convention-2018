import React from "react"
import {View, Text, StyleSheet} from "react-native"

const RouteHeaders = ['Info', 'Royalty 2018 Convention', 'Direction']

const AppHeader = ({scenes}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{RouteHeaders[scenes[0].route.index]}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'flex-end',
    padding: 20,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#aaa',
    shadowOffset: { height: 0, width: 0 },
  },
  label: { fontSize: 20,}
})

export default AppHeader
