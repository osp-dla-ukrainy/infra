import {PutObjectCommand} from '@aws-sdk/client-s3';
import {s3Client} from "./s3-client.mjs";

const params = {
    Bucket: "envs", // The path to the directory you want to upload the object to, starting with your Space name.
    Key: "hello-world.txt", // Object key, referenced whenever you want to access this file later.
    Body: "Hello, World!", // The object's contents. This variable is an object, not a string.
    ACL: "private", // Defines ACL permissions, such as private or public.
    Metadata: { // Defines metadata tags.
        "x-amz-meta-my-key": "your-value"
    }
};


// Step 4: Define a function that uploads your object using SDK's PutObjectCommand object and catches any errors.
const uploadObject = async () => {
    try {
        const data = await s3Client.send(new PutObjectCommand(params));
        console.log(
            "Successfully uploaded object: " +
            params.Bucket +
            "/" +
            params.Key
        );
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};


// Step 5: Call the uploadObject function.
uploadObject();
