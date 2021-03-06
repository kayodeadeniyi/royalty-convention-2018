import React from "react"
import {View, Text, StyleSheet, ScrollView, Platform, TouchableOpacity} from "react-native"
import programDetails from '../program'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

class Details extends React.Component {
  render() {
    const day = this.props.navigation.state.params.details
    const dayDetails = programDetails[day]["long"]
    const title = programDetails[day]["short"]["title"]

    return (
      <View style={styles.container}>
        <View style={styles.scheduleContainer}>
          <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.goBack()}>
            <Icon style={{padding: 15}} name='arrow-left' size={25} />
          </TouchableOpacity>
          <Text style={styles.schedule}>{title}</Text>
        </View>
        <ScrollView style={[styles.container, {marginTop: 20}]}>
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
  icon: {
    left: 0,
    bottom: 0,
    position: 'absolute',
  },
  scheduleContainer: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 100 : 70,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    alignItems: 'flex-end',
    padding: 20,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#aaa',
    shadowOffset: { height: 0, width: 0 },
    elevation: 3,
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
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    textAlign: 'center',
    fontSize: 20,
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
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    flex: 1,
    fontSize: 15,
    marginBottom: 10
  },
  smallText: {
    fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
    flex: 1,
    fontSize: 10,
    marginBottom: 5,
    color: '#555'
  }
})

export default Details
