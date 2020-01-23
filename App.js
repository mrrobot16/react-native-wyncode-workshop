import React from 'react'
import { TasksContextProvider } from './context/TasksContext'
import { SafeAreaView } from 'react-native'
import TasksList from './components/TasksList'
import Form from './components/Form'
export default () => (
  <TasksContextProvider>
    <SafeAreaView>
      <Form />
      <TasksList />
    </SafeAreaView>
  </TasksContextProvider>
)