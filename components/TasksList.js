import React, { useContext } from 'react'
import { FlatList, Text, View, StyleSheet } from 'react-native'
import { TasksContext } from '../context/TasksContext'
import ListItem from './ListItem';
export default () => {
  const { tasks } = useContext(TasksContext)
  return(
    <View style={styles.wrapper}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <ListItem {...item} />}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    margin: 50
  },
  separator: {
    width: '50%',
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  }
})