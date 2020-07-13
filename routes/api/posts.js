//Form area to post things and like comments
const express = require('express');
const router = express.Router();

//@route    GET api/posts
//@desc     Test route
//@access   Public
router.get('/', (req, res) => {
  res.send('Posts route');
});

module.exports = router;
