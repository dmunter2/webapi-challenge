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

router.put('/', (req,res) => {
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

    }
})



module.exports = router;
