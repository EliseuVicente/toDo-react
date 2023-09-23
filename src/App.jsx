import './global.css'
import { Header } from './components/Header';
import { NewTask } from './components/NewTask';


export function App(){
    return (
        <div>
            <Header />

            <NewTask/>

        </div>
        
        
    )
}

export default App