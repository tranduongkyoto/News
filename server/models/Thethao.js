const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ThethaoSchema = new Schema({
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

module.exports = mongoose.model('thethaos', ThethaoSchema)
