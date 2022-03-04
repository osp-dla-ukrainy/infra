const { S3 } = require('@aws-sdk/client-s3');
const {config} = require('dotenv')

config();

const s3Client = new S3({
    tls: false,
    endpoint: process.env.DO_SPACES_URL,
    region: "fra1",
    credentials: {
        accessKeyId: process.env.DO_ACCESS_KEY_ID,
        secretAccessKey: process.env.DO_SPACES_SECRET
    }
});

const envFileLocalPath = '.env';
const envFileBucketKey = 'envs/.env';

module.exports = { s3Client, envFileLocalPath, envFileBucketKey }
