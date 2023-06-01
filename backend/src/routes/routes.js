const { Router } = require('express');
const getPost = require('../controladores/getPost');
const postPosts = require('../controladores/postpost');
const deletePosts = require('../controladores/deletePost');
const updatePosts = require('../controladores/updatePost');



path = require('path');


const routes = new Router();

routes.get('/posts', getPost) 

routes.post('/posts', postPosts);

routes.delete('/posts/:id', deletePosts);

routes.put('/posts/like/:id', updatePosts);


module.exports = routes;