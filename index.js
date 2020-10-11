const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join('./dist')));

const router = require('./src/server/router');

app.use('/', router);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));  
});

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('server starting -> PORT:' + server.address().port);
});