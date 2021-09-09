const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParse = require('body-parser');
const db = require('./src/database/connection');
const Tweet = require('./src/models/Tweet');
const User = require('./src/models/User');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();
app.use(router);
app.use(express.static(path.resolve('./dist')));

router.use((err, req, res, next) => {
    if (err) { return res.send(err.message); }
});

User.hasMany(Tweet);
Tweet.belongsTo(User);

db.authenticate().then(async (data) => {
    console.log('connected');
    await db.sync({ alter: true });
    await app.listen(PORT, err => {
        if (err) {
            return console.log(`can nor liston on port : ${PORT}`);
        };
        console.log(`server is listenning on port : ${PORT}`);
    });
})
    .catch(err => { console.log(err); });

