import dataBase from "../dataBase.js";

export class StudentService {
    db = null;
    constructor(){
        this.db = dataBase;
    }
    addStudent = (studentData) => {
        this.db.get('students')
        .push(studentData)
        .write();
        return studentData;
    }
}