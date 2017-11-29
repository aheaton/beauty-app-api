'use strict'

const controller = require('lib/wiring/controller')
const Routine = require('app/models/routine')

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Routine.find()
    .then(routines => res.json({
      routines: routines.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  return res.json({
    routine: req.routine.toJSON()
  })
}

const create = (req, res, next) => {
  const routine = Object.assign(req.body.routine, {
    _owner: req.user._id
  })
  Routine.create(routine)
    .then(routine =>
      res.status(201).json({
        routine: routine.toJSON({ user: req.user })
      }))
    .catch(next)
}

const update = (req, res, next) => {
  delete req.body.routine._owner  // disallow owner reassignment.
  if (req.routine._owner.toString() !== req.user._id.toString()) {
    const resultStatusCode = 404
    return res.status(resultStatusCode).json({})
  } else {
    req.routine.update(req.body.routine)
      .then(() => res.sendStatus(204))
      .catch(next)
  }
}

const destroy = (req, res, next) => {
  if (req.routine._owner.toString() !== req.user._id.toString()) {
    const resultStatusCode = 404
    return res.status(resultStatusCode).json({})
  } else {
    req.routine.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
  }
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate },
  { method: setModel(Routine), only: ['show'] },
  { method: setModel(Routine, { forUser: true }), only: ['update', 'destroy'] }
] })
