const express = require('express')
const router = express.Router();

// user model 
// API endpoint to get user data from MongoDB

const Post = require('../../models/Posts')

router.get('/getpost', (req, res) => {
    Post.find()
        .sort({})
        .then(posts => res.json(posts))
});


//post 
router.post('/submitPost', (req, res) => {
    const newPost = new Post({
        id: req.body.id,
        username: req.body.username,
        fullName: req.body.fullName,
        avatarUrl: req.body.avatarUrl,
        content: req.body.content,
        likes: req.body.likes,
        retweets: req.body.retweets,
        replies: req.body.replies,
        timestamp: req.body.timestamp,
    });
    newPost.save().then(post => res.json(post));
});



module.exports = router;