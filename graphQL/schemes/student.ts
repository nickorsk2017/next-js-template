import { gql } from '@apollo/client';

export const GET_STUDENTS = gql`
    query GetStudents($offset: Int!, $limit: Int!){
        students(offset: $offset, limit: $limit) {
            id,
            firstName,
            lastName,
            email,
            address
        }
    }`;
export const GET_STUDENT = gql`
    query GetStudents($studentId: String!) {
        student(studentId: $studentId) {
            id,
            firstName,
            lastName,
            email,
            address
        }
    }`;

export const CREATE_STUDENT = gql`
mutation CreateStudent($studentInput: StudentInput!) {
    createStudent(studentInput: $studentInput) {
            id,
            firstName,
            lastName,
            email,
            address
        }
}`;


    // createStudent(studentInput: StudentInput): Student!


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