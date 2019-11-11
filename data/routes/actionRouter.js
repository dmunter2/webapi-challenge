const express = require('express');

const router = express.Router()
const actions = require('../helpers/actionModel')


router.get('/', (req, res) => {
    actions.get()
    .then(actions =>{
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({error: "did not work"})
    })
})



module.exports = router;