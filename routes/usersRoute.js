const express = require('express');
const users = require('../models/users');
const router = express.Router()
module.exports = router;
let Users = require('../models/users')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

router.route('/users')
  .get((req, res) => {
    // (En dur) res.send(Users);
    Users.find()
      .then(data => {
        res.send(data)
      })
      .catch(error => res.status(400).json(error))
  })

  router.route('/users/:id')
  .get((req, res) => {
      Users.findOne({ _id: req.params.id })
        .then(data => res.status(200).json(data))
        .catch(error => res.status(400).json(error))
    })
  .delete((req, res) => {
    Users.deleteOne({ _id: req.params.id })
    .then(data => res.send('deleted'))
    .catch(error => console.log('erreur 400'));
})

router.route('/sign-up')
  .post((req, res) => {
    let password = req.body.password;
    let users = new Users(req.body);
    if (password.length >= 8 && /[A-Z]/.test(password) >= 1 && /\d/.test(password) >= 1 && !password.match(/ /)) 
    {
      bcrypt.hash(password, 10, (error, hash) => 
      {
        if (error) 
        {
          res.status(500).json({ error });
        } else 
        {
          users.password = hash;
          users
            .save()
            .then(data => 
            {
              res.json({ success: true });
            })
            .catch(error => res.status(400).json({ error }));
        }
      });      
    } else 
    {
      res.status(400).json({ error: "Règle de mdp non respectée" });
    }
  });

router.route('/login')
.post ((req, res) => {
  const { name, password } = req.body;
  Users.findOne({ name })
    .then(user => {
      if (!user) {
        res.status(401).json({ error: 'User not found' });
      } else {
        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (!isMatch) {
              res.status(401).json({ error: 'Password is incorrect' });
            } else {
              const payload = { name: user.name };
              const options = { expiresIn: '1h' };
              const secret = process.env.JWT_SECRET;
              const token = jwt.sign(payload, secret, options);

              res.json({ success: true, token });
            }
          });
      }
    })
    .catch(error => res.status(400).json({ error }));
});