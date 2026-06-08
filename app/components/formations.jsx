import styles from "../page.module.css"
import { GraduationCap } from "lucide-react"

export default function Formations(){
    return(
        <div className={styles.formations}>
            <h2> <GraduationCap size={32} /> {" "} Diplômes et Formations</h2>
        </div>
    )
}