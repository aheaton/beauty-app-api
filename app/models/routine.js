'use strict'

const mongoose = require('mongoose')

const uploadSchema = new mongoose.Schema({
  routineType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  faceShape: {
    type: String,
    required: true
  },
  skinType: {
    type: String,
    required: true
  },
  eyeColor: {
    type: String,
    required: true
  },
  process: {
    type: String,
    required: true
  },
  // _url: {
  //   type: String,
  //   required: true
  // },
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
  // _key: {
  //   type: String,
  //   required: true
  // }
}, {
  timestamps: true,
  toJSON: {
  }
})

const Upload = mongoose.model('Upload', uploadSchema)

module.exports = Upload