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
    getStudents = ({offset, limit}) => {
        return this.db.get('students')
        .sortBy('created')
        .slice(offset, offset + limit)
        .value();
    }
}