const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.render('index')
})
router.use('/user',require('./user'))
router.use('/api',require('./rpc'))

module.exports = router