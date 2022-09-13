import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3"

const REGION = "us-east-1";
// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });
bucketlink = "https://cvmadocuments.s3.amazonaws.com/next-s3-uploads/fc3a6560-ddd9-4f97-92ab-c13ba5b33399/ChapterMembers.xlsx";

const Bucket = 'cvmadocuments'
const key = bucketlink.slice(49)

export const bucketParams = { Bucket: Bucket, Key: key };

export const run = async () => {
  try {
    const data = await s3Client.send(new DeleteObjectCommand(bucketParams));
    console.log("Success. Object deleted.", data);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
run();