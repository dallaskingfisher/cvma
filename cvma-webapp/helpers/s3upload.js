import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
export const s3Upload = async (bucketParams) => {
    try{
const s3Client = new S3Client();

 const data = await s3Client.send(new PutObjectCommand(bucketParams))
   
    return data
    } catch (error) {
        console.log("error", error)
    }
}

