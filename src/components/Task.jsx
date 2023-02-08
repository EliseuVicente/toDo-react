import styles from './Task.module.css';
import { Trash } from 'phosphor-react';


export function Task({content, onDeleteTask, id, cheked}){

    return (
       
       <div className={styles.taskItems}>

            <input 
                name='content'
                type="checkbox" 
                id={id}
                onClick={()=>cheked(id)}
            />
      
                <p>{content}</p>

            <button onClick={()=>onDeleteTask(id)} title="Deletar tarefa">
                <Trash size={17}/>
            </button>
        </div>          
    )
}