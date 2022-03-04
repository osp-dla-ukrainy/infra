const {PutObjectCommand} = require("@aws-sdk/client-s3");
const {s3Client} = require("./s3-client.js");
const fs = require("fs");
const {envFileLocalPath, envFileBucketKey} = require("./s3-client");


const bucketParams = {
    Bucket: process.env.DO_SPACES_BUCKET,
    Key: envFileBucketKey,
    Body: fs.readFileSync(envFileLocalPath)
};

s3Client.send(new PutObjectCommand(bucketParams));
