import styles from './StudentItem.module.css';

export function StudentItem(props) {
    const {student} = props;
    return (
      <div className={styles.studentItem}>
        <span>{student.firstName}</span> <span>{student.lastName}</span>
      </div>
    )
}
  