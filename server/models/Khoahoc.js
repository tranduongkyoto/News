const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KhoahocSchema = new Schema({
    title: {
        type: String
    },
    des: {
        type: String
    },
    href: {
        type: String
    },
    img: {
        type: String
    }
})

module.exports = mongoose.model('khoahocs', KhoahocSchema)
