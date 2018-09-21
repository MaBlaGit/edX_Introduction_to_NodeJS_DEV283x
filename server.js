const express = require('express');
const bodyparser = require('body-parser');
const logger = require('morgan');
const errorhandler = require('errorhandler');
const routes = require('./routes');
const port = 3000;

const app = express();
app.use(bodyparser.json());
app.use(logger('dev'));
app.use(errorhandler());

app.get('/posts', routes.post.getPosts);
app.post('/posts', routes.post.addPost);
app.put('/posts/:postId/', routes.post.updatePost);
app.delete('/posts/:postId/', routes.post.removePost);

app.get('/posts/:postId/comments', routes.comments.getComments);
app.post('/posts/:postId/comments', routes.comments.addComment);
app.put('/posts/:postId/comments/commentId', routes.comments.updateComment);

app.listen(port);
console.log(`Server is listening on port: ${port}...`);
