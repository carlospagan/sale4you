const express = require('express');
const json = require('body-parser');
const cors = require('cors');

const server = express();

server.use(json());
server.use(cors());

const port = 4000;

server.get('/healthy', (req, res) => {
    res.status(200).json({ message: 'API is running' });
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});