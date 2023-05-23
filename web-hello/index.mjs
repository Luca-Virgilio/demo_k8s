//express simple web server
import express from 'express';
import os from 'os';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const helloMessage = `Hello World from ${os.hostname()}`;
    console.log(`Request from ${req.ip}`);
    console.log(helloMessage);
    res.send(helloMessage);
});

app.listen(port, () => {
    console.log(`Web server is listening at port:${port}`);
});