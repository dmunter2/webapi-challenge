const express = require('express');

const server = express();

const projectsRouter = require('./data/projects/projectsRouter')
const actionsRouter = require('./data/routes/actionRouter')

server.use(express.json());


server.use('/api/project', projectsRouter);
server.use('/api/action', actionsRouter);

server.get('/', (req,res) => {
    res.send('practice test')
});




module.exports = server;
