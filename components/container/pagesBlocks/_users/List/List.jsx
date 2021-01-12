import { useLazyQuery } from '@apollo/client';
import {useEffect} from "react";
import {useList} from "./hooks";
import {StudentItem} from "@ui";
import {GET_STUDENTS} from "../../../../../graphQL/schemes";
import styles from './List.module.css';

export function List() {
   const [loadData, { loading, data }] = useLazyQuery(GET_STUDENTS, { 
   // ssr: true,
   // cache: new InMemoryCache(),
    fetchPolicy: "no-cache",
    variables: {
      offset: 0,
      limit: 10
    }
  });
  const {getList, pushList} = useList();
  let timer = null;

  useEffect(() => {
    console.log('!!!!');
    more(0);
  }, []);

  if(data && data.students){
    pushList(data.students);
  }

  const isBottom = (element) => {
    return element.scrollHeight - element.scrollTop === element.clientHeight
  }
  const trackScrolling = (event) => {
    if (isBottom(event.target)) {
      more();
    }
  };

  console.log("render!");

  const more = function(timeout = 500){
      clearTimeout(timer);
      timer = setTimeout(() => {
        console.log('fetching data');
        loadData({
          variables: {
            offset: getList().length,
            limit: 10
          },
        });
      }, timeout);
  }

  const renderList = () => {
    if(getList().length === 0){
      return <div>Empty list</div>
    }
    return getList().map((student) => {
      return <StudentItem key={student.id} student={student} />
    });
  }
  return (
    <div onScroll={trackScrolling} className={styles.list}>
        {renderList()}
    </div>
  )
}
  