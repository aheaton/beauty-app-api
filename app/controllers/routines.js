'use strict'

// const multer = require('multer')
// const multerUpload = multer({dest: '/tmp'})

const controller = require('lib/wiring/controller')
const Routine = require('app/models/routine')
// const s3Upload = require('lib/aws-s3-upload')
// const s3Destroy = require('lib/aws-s3-destroy')

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
  console.log('this is res', res)
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
  // const file = {
  //   path: req.file.path,
  //   name: req.file.originalname,
  //   mimetype: req.file.mimetype
  // }
  // console.log('this is the file', file)
  // s3Upload(file)
  // .then((s3Response) =>
  // Routine.create({
  //   routine_type: req.body.routine_type,
  //   description: req.body.description,
  //   // photoLink: req.body.photoLink,
  //   // _url: s3Response.Location,
  //   face_shape: req.body.face_shape,
  //   skin_type: req.body.skin_type,
  //   eye_color: req.body.eye_color,
  //   process: req.body.process,
  //   _owner: req.user._id
  //   // _key: s3Response.Key
  // })
  // .then((post) => {
  //   return res.status(201)
  //   .json({
  //     post: post
  //   })
  // })
  // .catch(next)

const update = (req, res, next) => {
  delete req.body.upload._owner  // disallow owner reassignment.
  if (req.upload._owner.toString() !== req.user._id.toString()) {
    const resultStatusCode = 404
    return res.status(resultStatusCode).json({})
  } else {
    req.upload.update(req.body.upload)
      .then(() => res.sendStatus(204))
      .catch(next)
  }
}

// const destroy = (req, res, next) => {
//   req.upload.remove()
//     .then(() => s3Destroy(req.upload._key))
//     .then(() => res.sendStatus(204))
//     .catch(next)
// }

module.exports = controller({
  index,
  show,
  create,
  update
  // destroy
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  // { method: multerUpload.single('file'), only: ['create'] }, // this creates req.file
  { method: authenticate },
  { method: setModel(Routine), only: ['show'] },
  { method: setModel(Routine, { forUser: true }), only: ['update', 'destroy'] }
] })
