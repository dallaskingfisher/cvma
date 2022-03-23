import { MongoClient } from "mongodb";

const password = 'bunbuns2022';
const database = 'cvma'

export async function connectDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://dallasking:bunbuns2022@test.3r6zb.mongodb.net/cvma?retryWrites=true&w=majority'
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  client.close();
  return result;
}

export async function findComments(client, collection, sort, filter) {
  const db = client.db();
  const document = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();
  
  return document;
}
