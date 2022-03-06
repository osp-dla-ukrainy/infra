const { S3 } = require('@aws-sdk/client-s3');
const {config} = require('dotenv')
const path = require("path");

config({ path: `.env.devops` });

const s3Client = new S3({
    tls: false,
    endpoint: process.env.DO_SPACES_URL,
    region: "fra1",
    credentials: {
        accessKeyId: process.env.DO_ACCESS_KEY_ID,
        secretAccessKey: process.env.DO_SPACES_SECRET
    }
});

const environments = ['dev', 'staging', 'prod'];
const env = process.env.ENV;

if (!environments.includes(env)) throw new Error(`Environment doesnt support: ${env}. Avaiable: ${environments}`)

const envFileLocalPath = path.join(env, '.env');
const envFileBucketKey = `envs/${env}/.env`;

module.exports = { s3Client, envFileLocalPath, envFileBucketKey }
