const express = require('express'),
      bodyParser = require('body-parser'),
      { randomBytes } = require('crypto'),
      cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors())

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body;

    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id])
});

app.listen(4000, () => {
    console.log('server is running')
})