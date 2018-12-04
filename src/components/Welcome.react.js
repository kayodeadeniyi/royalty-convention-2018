import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'


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
          <Text style={styles.textContainer}>Day One</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.props.navigation.navigate("Details", {details: 'day two'})}
        >
          <Text style={styles.textContainer}>Day Two</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.props.navigation.navigate("Details", {details: 'day three'})}
        >
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
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15,
    backgroundColor: '#fff',
  },
  scheduleContainer: {
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
