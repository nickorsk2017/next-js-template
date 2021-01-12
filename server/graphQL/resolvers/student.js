import {StudentService} from "../../db/services/index.js";

export const StudentQueries = {
    students: async (parent, args, context) => {
      try {
        const {offset, limit} = args;
        const studentService = new StudentService();
        return studentService.getStudents({offset, limit});
      } catch (err) {
        throw err;
      }
    },
    student: async (parent, args, context) => {
        try {
          return {
                  id: 1,
                  firstName: "Nick",
                  lastName: "Stepanov",
                  email: "fesfs@ffff.com",
                  address: ""
                }
        } catch (err) {
          throw err;
        }
    }
}

export const StudentMutations = {
  createStudent: async (parent, { studentInput }, context) => {
    try {
      const studentService = new StudentService();
      return studentService.addStudent({
        id: Date.now(),
        created: new Date().getTime(),
        ...studentInput
      })
    } catch (err) {
      throw err;
    }
  },
  updateStudent: async (parent, { studentId, studentInput }, context) => {
    try {
      return {
              id: studentId,
              firstName: studentInput.firstName,
              lastName: studentInput.lastName,
              email: studentInput.email,
              address: studentInput.address
            }
    } catch (err) {
      throw err;
    }
  },
  deleteStudent: async (parent, { studentId }, context) => {
    try {
      return { ok: true }
    } catch (err) {
      throw err;
    }
  }
}