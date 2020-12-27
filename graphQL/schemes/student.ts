import { gql } from '@apollo/client';

export const GET_STUDENTS = gql`
    query GetStudents{
        students {
            id,
            firstName,
            lastName,
            email
        }
    }`;
export const GET_STUDENT = gql`
    query GetStudents($studentId: String!) {
        student(studentId: $studentId) {
            id,
            firstName,
            lastName,
            email
        }
    }`;
    /*type Mutation {
        createStudent(studentInput: StudentInput): Student!
        updateStudent(studentId: ID!, studentInput: StudentInput): Student!
        deleteStudent(studentId: ID!): DeleteResponse
    }
    type DeleteResponse {
        ok: Boolean!
    }
    input StudentInput {
        email: String!
        firstName: String!
        lastName: String!
    }
    type Student {
        id: ID!
        email: String!
        firstName: String!
        lastName: String!
    }
`;
*/