const express = require('express');
const { body, validationResult } = require('express-validator'); // ✅ validationResult eklendi

const User = require('../models/User');
const authController = require('../controllers/auth');

const router = express.Router();

router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("Please enter a valid email.")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then(userDoc => {
          if (userDoc) {
            return Promise.reject("E-mail address already exists");
          }
        });
      })
      .normalizeEmail(),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long."),
    body("name")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Name is required.")
  ],
  (req, res, next) => {
    const errors = validationResult(req); // ✅ burada artık hata vermeyecek
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    authController.signup(req, res, next);
  }
);

router.post('/login', (req, res, next) => {
  authController.login(req, res, next);
});

module.exports = router;
