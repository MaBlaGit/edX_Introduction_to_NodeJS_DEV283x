const store = require('../data');

module.exports = {
    getPosts(req, res) {
        if(store.posts.length === 0){
            res.status(200).send({message: "No posts were found, add some post first!"})
        }else{
            res.status(200).send(store.posts)
        }
    },

    addPost(req, res) {
        let newPost = req.body
        store.posts.push(newPost)
        res.status(201).send({message: "New post added successfully!"})
    },

    updatePost(req, res) {
        if((store.posts.length - 1) < req.params.postId){
            res.status(404).send({message: "Selected post to update not found!"})
        }else{
            store.posts[req.params.postId] = req.body
            res.status(200).send({message: "Selected post updated successfully!"})
        }
    },

    removePost(req, res) {
        if((store.posts.length - 1) < req.params.postId){
            res.status(404).send({message: "Post to delete not found!"})
        }else{
        store.posts.splice(req.params.postId, 1)
        res.status(200).send({message: "Selected post deleted premanently!"})
        }
    }
  }
  