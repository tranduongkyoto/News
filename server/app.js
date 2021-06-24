const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { ApolloServer } = require('apollo-server-express')
// Load schema & resolvers
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

// Load db methods
const mongoDataMethods = require('./data/db')

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/items', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(
	console.log("OK!")
)

//create graphql server using applloserver
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => ({ mongoDataMethods })
})
//using express
const app = express()
app.use(cors())
server.applyMiddleware({ app })

app.listen({ port: process.env.PORT || 4000 }, () =>
	console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
)
