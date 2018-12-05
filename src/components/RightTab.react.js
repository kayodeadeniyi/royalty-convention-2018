import React from "react"
import {View, Text, StyleSheet} from "react-native"
import MapView, {Marker} from 'react-native-maps'

class RightTab extends React.Component {
  render() {
    return (
      <MapView style={styles.container}
        initialRegion={{
          latitude: 6.565216548380208,
          longitude: 3.340396285057068,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0021,
        }}
      >
        <Marker coordinate={
          {
            latitude: 6.565216548380208,
            longitude: 3.340396285057068,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0021,
          }
        } />
      </MapView>
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

export default RightTab
