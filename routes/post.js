const store = require('../data');

module.exports = {
    getPosts(req, res) {
        res.status(200).send(store.posts)
    },

    addPost(req, res) {
        let newPost = req.body
        store.posts.push(newPost)
        res.status(201).send(newPost)
    },

    updatePost(req, res) {
        store.posts[req.params.postId] = req.body
        res.status(200).send(store.posts[req.params.postId])
    },

    removePost(req, res) {
        store.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }
  }
  