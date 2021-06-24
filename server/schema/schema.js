const { gql } = require('apollo-server-express')

const typeDefs = gql`
	type New {
		id: ID
		title: String
		des: String
		href: String
		img: String
	}
	# ROOT TYPE
	type Query {
		thethao: [New]
		giaitri: [New]
		kinhdoanh: [New]
		khoahoc: [New]
		suckhoe: [New]
	}
	
`

module.exports = typeDefs
