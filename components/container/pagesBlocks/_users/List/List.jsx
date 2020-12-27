import { useQuery } from '@apollo/client';
import {GET_STUDENTS} from "../../../../../graphQL/schemes";
import styles from './List.module.css';

export function List() {
  const { loading, error, data } = useQuery(GET_STUDENTS);

  console.log(data, 'data!!!');
  return (
    <div className={styles.list}>

    </div>
  )
}
  