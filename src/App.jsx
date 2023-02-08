import './global.css'
import { Header } from './components/Header';
import styles from './App.module.css';
import { NewTask } from './components/NewTask';
import { Task } from './components/Task';



export function App(){
    return (
        <div>
            <Header />

            <NewTask/>

        </div>
        
        
    )
}

export default App