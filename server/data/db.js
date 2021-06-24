const Giaitri = require('../models/Giaitri')
const Khoahoc = require('../models/Khoahoc')
const Kinhdoanh = require('../models/Kinhdoanh')
const Suckhoe = require('../models/Suckhoe')
const Thethao = require('../models/Thethao')

const mongoDataMethods = {
	getAllThethao: async () => {
		return await Thethao.find()
	},
	getAllKinhdoanh: async () => {
		return await Kinhdoanh.find()
	},
	getAllKhoahoc: async () => {
		return await Khoahoc.find()
	},
	getAllSuckhoe: async () => {
		return await Suckhoe.find()
	},
	getAllGiaitri: async () => {
		return await Giaitri.find()
	},
}

module.exports = mongoDataMethods
