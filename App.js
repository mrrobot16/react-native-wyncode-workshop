import React from 'react'
import { TasksContextProvider } from './context/TasksContext'
import { SafeAreaView } from 'react-native'
import TasksList from './components/TasksList'
 
export default () => (
  <TasksContextProvider>
    <SafeAreaView>
      <TasksList />
    </SafeAreaView>
  </TasksContextProvider>
)