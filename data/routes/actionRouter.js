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

router.get('/:id', (req,res) => {
    const actionID = req.params.id;
    actions.get(actionID)
        .then(id => {
            res.status(201).json(id)
        })
})




router.post('/', (req,res) => {
    const actionInfo = req.body;2
    if(req.body.notes && req.body.description){
        actions.insert(actionInfo)
            .then(action => {
                res.status(201).json({success: true})
            })
            .catch(err => {
                res.status(500).json({success: "there was an error"})
            })
    } else {
        res.status(500).json({message: "incorrect parametser"})
    }
})



module.exports = router;