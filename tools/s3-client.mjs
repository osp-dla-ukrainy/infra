import {S3Client} from '@aws-sdk/client-s3';
import {config} from 'dotenv'

config();

console.log(process.env);

export const s3Client = new S3Client({
    endpoint: process.env.DO_SPACES_URL,
    region: "us-east-1",
    credentials: {
        accessKeyId: process.env.DO_ACCESS_KEY_ID,
        secretAccessKey: process.env.DO_SPACES_SECRET,
    },
});
