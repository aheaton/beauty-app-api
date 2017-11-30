'use strict'

const mongoose = require('mongoose')

const routineSchema = new mongoose.Schema({
  routineType: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photoURL: {
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
  _owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
  }
})

const Routine = mongoose.model('Routine', routineSchema)

module.exports = Routine
