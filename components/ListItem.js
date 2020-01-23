import React from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
 
export default props => {
  return(
    <View style={styles.listItem}>
      <View style={styles.textWrapper}>
        <Text>{props.description}</Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button title="🔲" color="white" />
        <Button title="❌" color="white" />
      </View>
    </View>
  )
}
 
const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    paddingHorizontal: 10
  },
  textWrapper: {
    width: '80%',
    justifyContent: 'center'
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})