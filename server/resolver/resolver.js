const resolvers = {
	// QUERY
	Query: {
		thethao: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllThethao(),
		kinhdoanh: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllKinhdoanh(),
		suckhoe: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllSuckhoe(),
		khoahoc: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllKhoahoc(),
		giaitri: async (parent, args, { mongoDataMethods }) => await mongoDataMethods.getAllGiaitri()
	}
}
module.exports = resolvers
