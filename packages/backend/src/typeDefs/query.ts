import gql from 'graphql-tag'

export default gql`
  type Query {
    queryTest: Boolean
  }

  type User {
    name: String!
    email: String!
    company: String
    password: String!
  }
`
