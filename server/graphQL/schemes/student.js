import ApolloServer from 'apollo-server-express';

export default ApolloServer.gql`
    type Query {
        students(offset: Int, limit: Int): [Student!]
        student(studentId: ID!): Student!
    }
    type Mutation {
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
        address: String
    }
    type Student {
        id: ID!
        email: String!
        firstName: String!
        lastName: String!
        address: String
    }
`;