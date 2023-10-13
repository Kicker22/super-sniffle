const express = require('express')
const router = express.Router();

// user model 
// API endpoint to get user data from MongoDB

const User = require('../../models/Users')

router.get('/user', (req, res) => {
    User.find()
        .sort({})
        .then(users => res.json(users))
});


//post 
router.post('/signUp', (req, res) => {
    const newUser = new User({
        id: req.body.id,
        username: req.body.username,
        fullName: req.body.fullName,
        avatarUrl: req.body.avatarUrl,
        timestamp: req.body.timestamp
    });
    newUser.save().then(user => res.json(user));
});



module.exports = router;