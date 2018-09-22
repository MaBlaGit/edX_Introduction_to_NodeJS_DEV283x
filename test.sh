# test CRUD on post

echo 'POST the post'
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts"
sleep 2

echo 'GET created post'
curl "http://localhost:3000/posts"
sleep 2

echo 'UPDATE post'
curl -H 'Content-Type: application/json' -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"
sleep 2

echo 'GET updated post'
curl "http://localhost:3000/posts"
sleep 2

echo 'DELETE created post'
curl -X DELETE "http://localhost:3000/posts/0"
sleep 2

# test CRUD on comments

echo 'POST Add post first in order to add the comments'
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts"
sleep 2

echo 'POST comment to the existing post'
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url":"http://webapplog.com/es6", "text": "", "comments": "This is my first comment here"}' "http://localhost:3000/posts/0/comments"
sleep 2

echo 'GET post after added comment'
curl "http://localhost:3000/posts" 
sleep 2

echo 'UPDATE selected comment'
curl -H "Content-Type: application/json" -X PUT -d '{"comments": "Wow, I updated the comment"}' "http://localhost:3000/posts/0/comments/0"
sleep 2

echo 'GET post after comment updated'
curl "http://localhost:3000/posts" 
sleep 2

echo 'DELETE comment from the post'
curl -X DELETE "http://localhost:3000/posts/0/comments/0"
sleep 2

