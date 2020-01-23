import React, { useContext } from 'react'
import { Text, View, Button, StyleSheet, Alert } from 'react-native'
import { TasksContext } from '../context/TasksContext'

export default props => {
  const { flipTask, deleteTask } = useContext(TasksContext)
  return(
    <View style={styles.listItem}>
      <View style={styles.textWrapper}>
        <Text style={ [props.completed && styles.completed] }>
          {props.description}
        </Text>
      </View>
      <View style={styles.buttonsWrapper}>
        <Button 
          title={ props.completed ? "✅" : "🔲" }
          color="white" 
          onPress={ async () => await flipTask(props.id)}
        />
        <Button 
          title="❌" 
          color="white" 
          onPress={ () => {
            Alert.alert(
              'Are you sure?',
              'This action cannot be undone onces done :/',
              [
                {
                  text: 'Cancel',
                  onPress: () => { console.log('Cancel Pressed') },
                  style: 'cancel'
                },
                {
                  text: 'OK',
                  onPress: async () => await deleteTask(props.id)
                }
              ],
              { cancelable: false }
            )
          }}
        />
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
  },
  completed: {
    textDecorationLine: 'line-through'
  }
  
})