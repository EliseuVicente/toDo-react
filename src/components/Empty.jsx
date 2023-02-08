import styles from './Empty.module.css';
import { ClipboardText } from "phosphor-react";


export function Empty(){
    return (
        <div id="empty" className={styles.empty}>
            <a className={styles.clip}><ClipboardText size={80} weight="thin" color="#333333" /> </a>
            <span>Você ainda não tem tarefas cadastradas</span>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}