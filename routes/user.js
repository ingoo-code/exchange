const express = require('express')
const router = express.Router()
const {user} = require('../models/user')

router.get('/login',(req,res)=>{
    res.render(`login`)
})

router.get(`/join`,(req,res)=>{
    res.render(`join`)
})

router.post(`/login`, async (req,res)=>{
    let {userid,userpw} = req.body
    let result = await user.findOne({
        where: { userid,userpw }
    })

    if (result.dataValues.userid == userid) {
        req.session.userid = userid
        req.session.isLogin = true

        res.redirect('/')
    }
})

module.exports = router