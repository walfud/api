import mongoose from 'mongoose'
 
const MONGO_URL = process.env.MONGO_URL || require('dotenv').config().MONGO_URL

function mongo(coll) {
    mongoose.connect(`${MONGO_URL}/${coll}`);
}