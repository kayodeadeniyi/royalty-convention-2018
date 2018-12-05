import React from "react"
import {View, Text, StyleSheet} from "react-native"

class LeftTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Royalty 2018</Text>
        <Text style={styles.welcome}>Greater Works(John 14 : 12)</Text>
        <Text style={styles.welcome}>Greater Works</Text>
        <Text style={styles.welcome}>Follow us on instagram @yfgstmary</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
})

export default LeftTab
