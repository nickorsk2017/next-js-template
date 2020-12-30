import {StudentService} from "../../db/services/index.js";

export const StudentQueries = {
    students: async (parent, args, context) => {
      try {
        return [
            {
                id: 1,
                firstName: "Nick",
                lastName: "Stepanov",
                email: "fesfs@ffff.com",
                address: ""
            },
            {
                id: 2,
                firstName: "Student",
                lastName: "2",
                email: "student2@gmail.com",
                address: ""
            },
            {
                id: 3,
                firstName: "Student",
                lastName: "3",
                email: "student3@gmail.com",
                address: ""
            },
            {
                id: 4,
                firstName: "Student",
                lastName: "4",
                email: "student4@gmail.com",
                address: ""
            },
            {
                id: 5,
                firstName: "Student",
                lastName: "5",
                email: "student5@gmail.com",
                address: ""
            },
            {
                id: 6,
                firstName: "Student",
                lastName: "6",
                email: "student6@gmail.com",
                address: ""
            },
            {
                id: 7,
                firstName: "Student",
                lastName: "7",
                email: "student7@gmail.com",
                address: "",
            },
        ]
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