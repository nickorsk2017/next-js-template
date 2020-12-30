import low from 'lowdb';
import path from 'path';
import FileSync from 'lowdb/adapters/FileSync.js';

const adapter = new FileSync(process.cwd() + '/server/db/db.json');
const db = low(adapter);

//default data of dataBase
db.defaults({ students: [], lessons: [] })
  .write();
  
  console.log(db.get("students").value(), 'ddd')

export default db;