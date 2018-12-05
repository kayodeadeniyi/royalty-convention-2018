import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.props.navigation.navigate("Details", {details: 'day one'})}
        >
          <View style={styles.iconContainer}>
            <Icon name='run-fast' size={15} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Day One</Text>
            <Text style={styles.smallText}>Greater Works talk, Men talk, Quiz and Debate</Text>
            <Text style={styles.smallText}>19th December</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.props.navigation.navigate("Details", {details: 'day two'})}
        >
          <View style={styles.iconContainer}>
            <Icon name='lightbulb-on-outline' size={15} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Day Two</Text>
            <Text style={styles.smallText}>Greater Works talk, Men talk, Quiz and Debate</Text>
            <Text style={styles.smallText}>20th December</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.props.navigation.navigate("Details", {details: 'day three'})}
        >
          <View style={styles.iconContainer}>
            <Icon name='security' size={15} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Day Three</Text>
            <Text style={styles.smallText}>Marital Talks, Something and Nothing</Text>
            <Text style={styles.smallText}>21st December</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.props.navigation.navigate("Details", {details: 'day three'})}
        >
          <View style={styles.iconContainer}>
            <Icon name='stethoscope' size={15} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Day Four</Text>
            <Text style={styles.smallText}>Career, Academic, Medical and Dinner</Text>
            <Text style={styles.smallText}>22nd December</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => this.props.navigation.navigate("Details", {details: 'day three'})}
        >
          <View style={styles.iconContainer}>
            <Icon name='home' size={15} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Day Five</Text>
            <Text style={styles.smallText}>Marital Talks, Something and Nothing</Text>
            <Text style={styles.smallText}>23rd December</Text>
          </View>
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
    marginTop: 0,
    paddingLeft: 20,
    paddingTop: 20,
  },
  touchableOpacity: {
    flex: 1,
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderLeftColor: '#2196f3',
    marginLeft: 30,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#2196f3',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15,
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 10,
    marginTop: 0,
  },
  title: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontSize: 14,
    marginBottom: 20,
  },
  smallText: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    fontSize: 10,
    marginBottom: 5,
    color: '#5d5d5d',
  }
});
