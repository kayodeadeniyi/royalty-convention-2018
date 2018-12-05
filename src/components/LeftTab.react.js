import React from "react"
import {View, Text, StyleSheet, Linking, Platform} from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class LeftTab extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.welcome, {fontSize: 32}]}>Royalty 2018</Text>
        <Text style={styles.welcome}>Greater Works(John 14 : 12)</Text>
        <Text style={styles.welcome}>19th - 23rd December 2018</Text>
        <View style={styles.instagramLink}>
          <Icon name='instagram' size={32} />
          <Text style={[styles.link]} onPress={() => Linking.openURL('https://www.instagram.com/yfgstmary/')}> @yfgstmary</Text>
        </View>
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
  },
  link: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    color: '#2196f3',
    marginBottom: 5,
    fontSize: 20,
  },
  instagramLink: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  }
})

export default LeftTab
