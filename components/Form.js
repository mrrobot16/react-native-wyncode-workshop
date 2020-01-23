import React, { useState, useContext } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { TasksContext } from '../context/TasksContext'
export default () => {
  const [description, setDescription] = useState('')
  const { addTask } = useContext(TasksContext)
  return(
    <View style={styles.header}>
      <Text style={styles.headerText}>
        My Tasks
      </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={text => setDescription(text)}
        value={description}
        onSubmitEditing={() => {
          if (description) {
            setDescription('')
            addTask(description)
          }
        }}
        returnKeyType="done"
        placeholder="Add a task..."
        enablesReturnKeyAutomatically={true}        
      />
    </View>  
  )
}
 
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'whitesmoke',
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    borderTopColor: 'gray',
    borderTopWidth: 1
  },
  headerText: {
    fontSize: 30,
    marginTop: 20
  },
  textInput: {
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'white'
  }
})