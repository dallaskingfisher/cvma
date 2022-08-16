import { hash, compare } from 'bcryptjs';
import { S3Client } from '@aws-sdk/client-s3';

const REGION = "us-east-1";
const s3Client = new S3Client({ region: REGION });
export{s3Client}

export async function hashPasswd(password) {
  const hashedPasswd = await hash(password, 12);
  return hashedPasswd;
}

export async function verifyPasswd (passwd, hashedPasswd) {
  const isValid = await compare(passwd, hashedPasswd);
  return isValid;
}

// pull data from data base to make a year array



