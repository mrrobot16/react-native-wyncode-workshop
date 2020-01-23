import React, { createContext, useState } from 'react'
 
export const TasksContext = createContext()
 
export const TasksContextProvider = ({ children }) => {
  const dummyTasks  = [
                        {description: 'Learn React Native', id: '1'},  
                        {description: 'Learn React Context', id: '2'}
                      ]
  const [tasks, setTasks] = useState(dummyTasks)
 
  return(
    <TasksContext.Provider value={{ tasks }}>
      { children }
    </TasksContext.Provider>
  )
}