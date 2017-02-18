const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.redirect(301, '/')
})

router.get('/1234', (req, res, next) => {
  res.render('room')
})

module.exports = router
