const path = require('path');
// const crypto = require('crypto');
const express = require('express');
// const mongoose = require('mongoose');
// const mongodb = require('mongodb');
const { v4 } = require('uuid');
const multer = require('multer');
const dotenv = require('dotenv');
// const fs = require('fs');

dotenv.config();

const PORT = process.env.PORT || '8700';
const NODE_ENV = process.env.NODE_ENV || 'production';
const DATABASE_URI = process.env.DATABASE_URI || '';





const app = express();
const { GridFsStorage } = require('multer-gridfs-storage');
// const mongo = mongodb.MongoClient;
// const objectId = mongodb.ObjectId;



// const storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, './imgs');
//     },
//     filename: function (req, file, callback) {
//         console.log(file);
//         callback(null, `${v4()}-${Date.now()}${path.extname(file.originalname)}`);
//     }
// });

const storage = new GridFsStorage({
    url: DATABASE_URI,
    file: (req, file) => {
        console.log(file);
        return {
            bucketName: 'images'
        };
    }
});

const upload = multer({ storage: storage });


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/upload', upload.single('recorded_video'), async function (req, res) {
    res.json(req.headers);
});

app.get('/video', function (req, res) {});


// mongoose
//     .connect(DATABASE_URI)
//     .then(function () {
//         console.log('Connected to Database....');
//         app.listen(PORT, function () {
//             console.log(`Listening on PORT ${PORT}`);
//         });
//     });




// console.log('Connected to Database....');
app.listen(PORT, function () {
    console.log(`Listening on PORT ${PORT}`);
});
