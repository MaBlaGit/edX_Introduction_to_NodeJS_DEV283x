const store = require('../data');

module.exports = {
    getComments(req, res) {
      let postId = req.params.postId
      if(!store.posts[postId].comments){
        res.send({message: "There is no comment!"})
      }
      res.status(200).send(store.posts[postId].comments)
    }, 

    addComment(req, res) {
      let postId = req.params.postId
      if(!store.posts[postId].comments){  
        store.posts[postId].comments = []
      }
      store.posts[postId].comments.push({"text": req.body.comments})
      res.status(200).send({message: `Comment was added successfully`})
    },

    updateComment(req, res) {
      
      
    },

    removeComment(req, res) {
      
    }  
  }