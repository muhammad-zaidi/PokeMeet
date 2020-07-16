//Will handle registering users/adding users
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validationResult } = require('express-validator');

const User = require('../../models/User');

//@route    POST api/users
//@desc     Register users
//@access   Public
router.post(
  '/',
  [
    check('name', 'Name required').not().isEmpty(),
    check('email', 'Valid Email required').isEmail(),
    check(
      'password',
      'Please enter a valid password with min 6 characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      //See if user exists; send back error if it already does

      //Get users gravatar

      //Encrypt password

      //Return jsonwebtoken

      res.send('User route');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;
