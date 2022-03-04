const {s3Client, envFileBucketKey, envFileLocalPath} = require("./s3-client");
const {GetObjectCommand} = require("@aws-sdk/client-s3");
const fs = require("fs");

const bucketParams = {
    Bucket: process.env.DO_SPACES_BUCKET,
    Key: envFileBucketKey,
};

(async () => {
    const data = await s3Client.send(new GetObjectCommand(bucketParams));
    const file = fs.createWriteStream(envFileLocalPath)
    data.Body.pipe(file);
})();
