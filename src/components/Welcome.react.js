import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.scheduleContainer}>
          <Text style={styles.schedule}>Schedule</Text>
        </View>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.props.navigation.navigate("Details", {details: 'day one'})}
        >
          <Icon style={styles.icon} name='home' size={25} />
          <Text style={styles.textContainer}>Day One</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.props.navigation.navigate("Details", {details: 'day two'})}
        >
          <Icon style={styles.icon} name='home' size={25} />
          <Text style={styles.textContainer}>Day Two</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.props.navigation.navigate("Details", {details: 'day three'})}
        >
          <Icon style={styles.icon} name='home' size={25} />
          <Text style={styles.textContainer}>Day Three</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    margin: 10,
    marginTop: 50
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#222',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scheduleContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    padding: 10,
    marginBottom: 10
  },
  schedule: {
    textAlign: 'center',
    fontSize: 20,
  },
  textContainer: {
    fontSize: 20,
    margin: 10,
  }
});
