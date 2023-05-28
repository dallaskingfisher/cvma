import { MongoClient } from "mongodb";



export async function connectDatabase() {
  const client = await MongoClient.connect(
    `${process.env.MONGO_CONNECT}`
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
