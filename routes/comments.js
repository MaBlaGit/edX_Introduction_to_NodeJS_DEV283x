const store = require('../data');

module.exports = {
    getComments(req, res) {
      let postId = req.params.postId
      if((store.posts.length - 1) < req.params.postId){
        res.status(404).send({message: "No post was found!"})
      }else if(store.posts.length === 0){
        res.status(404).send({message: "Adding comments impossible, first create post in order to add comments!"})
      }else if(!store.posts[postId].comments || store.posts[postId].comments.length === 0){
        res.status(404).send({message: "There is no comments!"})
      }else{
        res.status(200).send(store.posts[postId].comments)
      }
    }, 

    addComment(req, res) {
      let postId = req.params.postId

      if((store.posts.length - 1) < postId){
        res.status(404).send({message: "Adding comments impossible, no post found"})
      }else if(store.posts.length === 0){
        res.status(404).send({message: "Adding comments impossible, first create post in order to add comments!"})
      }else if(!store.posts[postId].comments && req.body.comments){  
        store.posts[postId].comments = []
        store.posts[postId].comments.push({"text": req.body.comments})
        res.status(200).send({message: "Comment was added successfully"})
      }else if(!req.body.comments){
        res.send({message: "Lack of comment in the payload!"})
      } else {
        store.posts[postId].comments.push({"text": req.body.comments})
        res.status(200).send({message: "Comment was added successfully"})
      }
    },
    updateComment(req, res) {
      let postId = req.params.postId
      let commentId = req.params.commentId
      if((store.posts.length - 1) < req.params.postId || (store.posts[postId].comments.length - 1) < req.params.commentId){
        res.status(404).send({message: "Comment or post where comment should be not found!"})
      }else{
        store.posts[postId].comments[commentId].text = req.body.comments
        res.status(200).send({message: "Comment updated"})
      }
    },

    removeComment(req, res) {
      let postId = req.params.postId
      let commentId = req.params.commentId
      if((store.posts.length - 1) < req.params.postId || (store.posts[postId].comments.length - 1) < req.params.commentId){
        res.status(404).send("Comment do not exists!")
      }else if(!store.posts[postId].comments){
        res.status(404).send("There is no comment to delete")
      }else{
        store.posts[postId].comments.splice(req.params.commentId, 1)
        res.status(200).send({message: "Comment was removed successfully!"})
      }
    }  
  }