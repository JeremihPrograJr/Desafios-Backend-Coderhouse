const rootDefs =`#graphql
    type Query{
        _: String
    }
    type Mutation{
        _: String
    }

`

module.exports={
    typeDefs:[rootDefs],
    resolvers:[]
}