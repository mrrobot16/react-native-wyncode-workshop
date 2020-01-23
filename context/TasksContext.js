import React, { createContext, useState } from 'react'
import { AsyncStorage } from 'react-native'
const dummyTasks  = [
  { description: 'Learn React Native', id: '1'},  
  { description: 'Learn React Context', id: '2'}
]

export const TasksContext = createContext()
 
export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(dummyTasks)
  const getTasks = async () => {
    try {
      let storedTasks = await AsyncStorage.getItem('TASKS');
      storedTasks = JSON.parse(storedTasks || "[]")
      return storedTasks
    } catch (error) {
      console.error(error);
    }
  }
  const addTask = description => {
    const newTask = {
      description,
      completed: false,
      id: String(Number(new Date()))
    }
    setTasks([newTask, ...tasks])
  }
  const flipTask = taskId => {
    const index = tasks.findIndex(task => task.id === taskId)
    const newTasks = [...tasks]
    newTasks[index].completed = !newTasks[index].completed
    setTasks(newTasks)
  }
  const deleteTask = taskId => {
     setTasks(tasks.filter(task => task.id !== taskId))
   }
  return(
    <TasksContext.Provider value={{ tasks, addTask, flipTask, deleteTask }}>
      { children }
    </TasksContext.Provider>
  )
}