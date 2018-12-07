import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Platform} from 'react-native';
import programDetails from '../program'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


export default class App extends Component {
  goToDetails(details) {
    this.props.navigation.navigate("Details", {details: details})
  }

  render() {
    const days = Object.keys(programDetails)

    return (
      <View style={styles.container}>
        {
          days.map(day => {
            const daySummary = programDetails[day]["short"]

            return(
              <TouchableOpacity style={styles.touchableOpacity} onPress={() => this.goToDetails(day)} key={day}>
                <View style={styles.iconContainer}>
                  <Icon name={daySummary["icon"]} size={15} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{daySummary["title"]}</Text>
                  <Text style={styles.smallText}>{daySummary["highlights"]}</Text>
                  <Text style={styles.smallText}>{daySummary["date"]}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
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
