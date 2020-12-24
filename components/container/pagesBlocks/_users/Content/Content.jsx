import {Filter, List} from "../";
import {StudentForm} from "@forms/";
import styles from './Content.module.css';

export function Content() {
    return (
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <Filter/>
          <List/>
        </div>
        <div className={styles.rightSide}>
          <StudentForm/>
        </div>
      </div>
    )
  }
  