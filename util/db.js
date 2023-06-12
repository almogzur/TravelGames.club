// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { MongoClient } from "mongodb";

if (!process.env.M_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.M_URI;
const options = {};

let client;
let clientPromise;
 try{
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
 }catch(err){
  console.log(err)
 }

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;