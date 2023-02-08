import { PlusCircle } from "phosphor-react";
import { useState } from 'react';
import { Empty } from "./Empty";

import styles from './NewTask.module.css';
import { Task } from "./Task";


export function NewTask(){

    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([])
        
    // Creating new Tasks
    const handleCreateNewTask = () =>{
        
        const idRandom = (num) => Math.floor(Math.random() * num)

        const newTask = {id: idRandom(120220) , title: task , isComplete: false }
      
        setTasks([...tasks, newTask])
        setTask('')
    }

    const handleDeleteTask = (id) => {
	
        const tasksWithoutDeleteOne = tasks.filter(task => task.id !== id);
        setTasks(tasksWithoutDeleteOne)
        console.log(tasksWithoutDeleteOne)
	} 

    const taskChecked = (id, isComplete) =>{
        const index = tasks.findIndex(task => task.id == id)
        const completed = tasks
        completed[index].isComplete = !isComplete
    }

    const completedTasks = tasks.reduce((acc, task) => {
        if(task.isComplete !== false) return acc + 1;
        return acc;
      },0)

    return (
        
        <div className={styles.taskbox}>
          <input  className={styles.addbox}
            type="text"
            placeholder="Adicione uma nova tarefa"
            onChange={(e) => setTask(e.target.value)}
            value={task}
            /> 
            
           <button
            onClick={handleCreateNewTask}
            title='Criar uma nova tarefa'>
                Criar  
            <PlusCircle size={28} weight="bold"/>
              
            </button>

            <footer className={styles.taskBox}>

            <div className={styles.tasksCreated}>
                    Tarefas Criadas
                    <div className={styles.countCreateds}>
                        {tasks.length}
                    </div>
                </div>

            <div className={styles.tasksCompleted}>
                    Tarefas Concluídas

                    <div className={styles.countCompleted}>
                        {completedTasks} de {tasks.length}
                    </div>
            </div>

            </footer>

            {tasks.length > 0 ? (  

            <div className={styles.taskBox}>
            
                <div>
                {tasks.map((task) =>{
                    return (
                    <Task
                        key={task.id}
                        id={task.id}
                        content={task.title}
                        onDeleteTask={handleDeleteTask}
                        cheked={taskChecked}
                    />
            
                )
                
            })} 
            
            </div>  
        </div>
            ): (
                <Empty />
            )}

        </div>
        
      )
}