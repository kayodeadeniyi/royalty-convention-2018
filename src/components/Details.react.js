import React from "react"
import {View, Text, StyleSheet, ScrollView} from "react-native"
import programDetails from '../program.js'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class Details extends React.Component {
  render() {
    const day = this.props.navigation.state.params.details
    const dayDetails = programDetails[day]

    return (
      <View style={styles.container}>
        <View style={styles.scheduleContainer}>
          <Text style={styles.schedule}>{day}</Text>
        </View>
        <ScrollView style={styles.container}>
          {
            dayDetails.map(program => (
              <View style={styles.listContainer} key={program['title']}>
                <View style={styles.iconContainer}>
                  <Icon name={program['icon'] || 'home'} size={15} />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{program['title']}</Text>
                  <Text style={styles.smallText}>{program['venue']}</Text>
                  <Text style={styles.smallText}>{program['time']}</Text>
                </View>
              </View>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scheduleContainer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#2196f3',
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
  schedule: {
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'capitalize',
    color: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 100
  },
  textContainer: {
    flex: 1,
    margin: 10,
    marginTop: 0,
    alignItems: 'flex-start'
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderLeftColor: '#2196f3',
    marginLeft: 30,
  },
  title: {
    flex: 1,
    fontSize: 15,
    marginBottom: 10
  },
  smallText: {
    flex: 1,
    fontSize: 10,
    marginBottom: 5,
    color: '#555'
  }
})

export default Details
