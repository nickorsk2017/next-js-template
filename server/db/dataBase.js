import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync.js';
import {students} from "./mockup.js";

const adapter = new FileSync(process.cwd() + '/server/db/db.json');
const db = low(adapter);

//default data of dataBase
db.defaults({ students: students, lessons: [] })
  .write();

export default db;