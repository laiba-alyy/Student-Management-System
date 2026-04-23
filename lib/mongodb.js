import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

console.log('MONGODB_URI:', MONGODB_URI); // Debug the environment variable
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  try {
    if (cached.conn) {
      return cached.conn;
    }

    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      };

      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
        console.log('MongoDB connected');
        return mongoose;
      }).catch((err) => {
        console.error('MongoDB connection error during promise:', err.message, 'Stack:', err.stack);
        throw err; // Re-throw to propagate the error
      });
    }

    cached.conn = await cached.promise;
    return cached.conn;
  } catch (err) {
    console.error('MongoDB connection error in async function:', err.message, 'Stack:', err.stack);
    throw err; // Ensure the error is propagated
  }
}

export default connectDB;