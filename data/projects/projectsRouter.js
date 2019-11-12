const express = require('express')

const router = express.Router();

const projects = require('../helpers/projectModel')

router.get('/', (req, res) => {
    projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({error: 'there was a server error'})
    })
});

router.post('/', (req,res) => {
    const projectInfo = req.body
    if (req.body.name && req.body.description){
        projects.insert(projectInfo)
            .then(project => {
                res.status(201).json({
                    success: true,
                    project: project
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: "it didnt wurk",
                    success: false
                })
            })

    } else{
        res.status(500).json({message: "You must enter a name and description"})
    }
})

router.put('/:id', (req,res) => {
    const userID = req.params.id;
    const body = req.body;
    if(req.body.name || req.body.description){
        projects.update(userID, body)
            .then(project => {
                res.status(201).json({message: "changes were updated"})

            })
    } else {
        res.status(400).json({message: "you must enter a name or description change"})
    }


})


router.delete('/:id', (req, res) => {
    const userID = req.params.id
    if(req.params.id){
        projects.remove(userID)
        .then(project => {
            res.status(201).json({message: "project was deleted"})
        })
    } else{
        res.status(500).json({message: 'if you want to delete something you must tell me what the id # is'})
    }
})


















module.exports = router;
