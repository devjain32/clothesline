require("dotenv").config();
const express = require("express");
const fileupload = require("express-fileupload");
const AWS = require("aws-sdk");
const app = express();
const PORT = process.env.PORT || 3000;
const BUCKET_NAME = process.env.AWS_BUCKET_NAME
const s3Config = {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    Bucket: BUCKET_NAME
}

const S3 = new AWS.S3(s3Config);

app.use(fileupload());
app.use(express.static("public"));

app.post("/upload", function(req, res) {
    //res.json(req.ffilesfile);
    S3.upload({
        Bucket: BUCKET_NAME,
        Key: req.files.file.name,
        Body: req.files.file.data,
        ContentType: req.files.file.mimetype
    }, function(err, data) {
        console.log(err);
        console.log(data.Location)
        res.json(data);
    })
})


app.get("/file/:filename", (req, res) => {
    console.log("here");
    S3.getObject({
        Bucket: BUCKET_NAME,
        Key: req.params.filename
    }, function (err, data) {
        console.log(err)
        res.type(data.ContentType)
        res.send(data.Body)
    })
})

app.listen(PORT, () => {console.log("Listening on " + PORT)})

