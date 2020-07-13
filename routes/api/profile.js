//Routes that have to do with profiles (adding/updating them)
const express = require('express');
const router = express.Router();

//@route    GET api/profile
//@desc     Test route
//@access   Public
router.get('/', (req, res) => {
  res.send('Profile route');
});

module.exports = router;
