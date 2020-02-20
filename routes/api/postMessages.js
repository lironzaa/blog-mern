const express = require('express');
const router = express.Router();
let PostMessage = require('../../models/postMessage');
const ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
  PostMessage.PostMessage.find((err, docs) => {
    if (!err) res.send(docs)
    else console.log('error while receiving all records ' + JSON.stringify(err, undefined, 2));
  })
})

router.post('/', (req, res) => {
  console.log(req.body);
  const newPost = new PostMessage.PostMessage({
    title: req.body.title,
    message: req.body.message
  })

  newPost.save((err, post) => {
    if (!err) res.send(post)
    else console.log('error while creating post ' + JSON.stringify(err, undefined, 2));
  })
})

router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id ${req.params.id}`);

  const updatedPost = {
    title: req.body.title,
    message: req.body.message
  }

  PostMessage.PostMessage.findByIdAndUpdate(req.params.id,
    { $set: updatedPost },
    { new: true },
    (err, post) => {
      if (!err) res.send(post)
      else console.log('error while updating post ' + JSON.stringify(err, undefined, 2));
    })
})

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record with given id ${req.params.id}`);

  PostMessage.PostMessage.findByIdAndRemove(req.params.id, (err, post) => {
    if (!err) res.send(post)
    else console.log('error while deleting post ' + JSON.stringify(err, undefined, 2));
  })
})

module.exports = router;