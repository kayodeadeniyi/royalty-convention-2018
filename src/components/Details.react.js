import React from "react"
import {View, Text, StyleSheet, ScrollView} from "react-native"
import programDetails from '../program.js'

class Details extends React.Component {
  render() {
    console.log(this.props.navigation.state.params.details, 'props')
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
              <View style={styles.textContainer} key={program['title']}>
                <Text style={styles.title}>{program['title']}</Text>
                <Text style={styles.smallText}>{program['venue']}</Text>
                <Text style={styles.smallText}>{program['time']}</Text>
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
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
    padding: 10,
    marginBottom: 10
  },
  schedule: {
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'capitalize'
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    height: 100
  },
  textContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'flex-start',
  },
  title: {
    flex: 1,
    fontSize: 15,
    marginBottom: 10
  },
  smallText: {
    flex: 1,
    fontSize: 10,
    marginBottom: 5
  }
})

export default Details
