import { MongoClient } from 'mongodb'
import isPromise from 'is-promise'

const MONGO_URL = process.env.MONGO_URL || require('dotenv').config().parsed.MONGO_URL

export async function mongo(dbName, collName, fn) {
    let client
    try {
        client = await MongoClient.connect(MONGO_URL)
        const db = await client.db(dbName)
        const coll = await db.collection(collName)
        if (isPromise(fn)) {
            return await fn(null, db, coll)
        } else {
            return fn(null, db, coll)
        }
    } catch (err) {
        if (isPromise(fn)) {
            return await fn(err)
        } else {
            return fn(err)
        }
    } finally {
        client && await client.close()
    }
}