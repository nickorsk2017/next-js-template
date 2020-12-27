
import * as studentResolvers from './student.js';

export default {
  Query: {
    ...studentResolvers.StudentQueries
  },
  Mutation: {
    ...studentResolvers.StudentMutations
  }
}